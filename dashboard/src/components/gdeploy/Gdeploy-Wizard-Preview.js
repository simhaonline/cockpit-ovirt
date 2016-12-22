import React, { Component } from 'react'
import WizardExecutionStep from './Gdeploy-Wizard-Execution'
import GdeployUtil from '../../helpers/GdeployUtil'

class WizardPreviewStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gdeployConfig: "Loading the configuration...",
            isEditing: false
        }
        this.handleConfigChange = this.handleConfigChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.readGdeployConfig = this.readGdeployConfig.bind(this)
    }
    readGdeployConfig() {
        const that = this
        cockpit.file(that.props.configFilePath).read()
        .done(function(gdeployConfig) {
            that.setState({ gdeployConfig })
        })
        .fail(function (error) {
            that.setState({ gdeployConfig: `Failed to load the config file ${that.props.configFilePath} \n ${error}` })
        })
    }
    componentDidMount() {
        this.readGdeployConfig()
    }
    handleConfigChange(e) {
        this.setState({ gdeployConfig: e.target.value })
    }
    handleEdit() {
        this.setState({ isEditing: true })
    }
    handleSave() {
        this.setState({ isEditing: false })
        GdeployUtil.writeConfigFile(this.props.configFilePath, this.state.gdeployConfig)
    }
    render() {
        if (this.props.isDeploymentStarted) {
            return (
                <WizardExecutionStep configFilePath={this.props.configFilePath}
                    heAnsweFilePath={this.props.heAnsweFilePath}
                    heCommanAnswer={this.props.heCommanAnswer}
                    onSuccess={this.props.onSuccess}
                    />
            )
        } else {
            return (
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <span className="pficon-settings"></span>
                            <span>
                                Generated Gdeploy configuration : {this.props.configFilePath}
                            </span>
                            <div className="pull-right">
                                {this.state.isEditing &&
                                    <button className="btn btn-default"
                                        onClick={this.handleSave}>
                                        <span className="pficon pficon-save">&nbsp;</span>
                                        Save
                                        </button>
                                }
                                {!this.state.isEditing &&
                                    <button className="btn btn-default"
                                        onClick={this.handleEdit}>
                                        <span className="pficon pficon-edit">&nbsp;</span>
                                        Edit
                                    </button>
                                }
                                <button className="btn btn-default"
                                    onClick={this.createGdeployConfig}>
                                    <span className="fa fa-refresh">&nbsp;</span>
                                    Reload
                                    </button>
                            </div>
                        </div>
                        <textarea className="gdeploy-wizard-config-preview"
                            value={this.state.gdeployConfig} onChange={this.handleConfigChange} readOnly={!this.state.isEditing}>
                        </textarea>
                    </div>
                </div>
            )
        }
    }
}

WizardPreviewStep.propTypes = {
    stepName: React.PropTypes.string.isRequired,
    heAnsweFilePath: React.PropTypes.string.isRequired,
    templatePath: React.PropTypes.string.isRequired,
    glusterModel: React.PropTypes.object.isRequired,
    configFilePath: React.PropTypes.string.isRequired,
    heCommanAnswer: React.PropTypes.string.isRequired,
    isDeploymentStarted: React.PropTypes.bool.isRequired,
    onSuccess: React.PropTypes.func.isRequired
}

export default WizardPreviewStep
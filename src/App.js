import React, { Component } from 'react'
import {
  Container,
  Form,
  Header,
  Select,
  Checkbox,
  TextArea,
  Button,
  Grid,
  Segment,
  Dimmer,
  Loader,
  Message,
  Transition
} from 'semantic-ui-react'
import './App.css'
import config from './config.js'
import secrets from './secrets.js'
import axios from 'axios'

export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      message: false,
      error: false,
      submitter: '',
      cohort: '',
      session: '',
      player: '',
      scene: '',
      notes: '',
      ad: false,
      ps: false,
      cl: false,
      cr: false,
      em: false,
      co: false,
      it: false,
      in: false,
      player_options: [],
      submitter_options: [],
      cohort_options: [],
      session_options: [],
      scene_options: []
    }

    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  componentDidMount() {
    config.common.map((val1,index) => {
      return axios({
        method: 'GET',
        url: config.url + val1.query,
        headers: {
          'Accept': 'application/json',
          'X-DreamFactory-Api-Key': secrets.apiKey
        }
      }).then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          this.setState({ [val1.id]: response.data.resource.map((val) => { return { key: val.text, text: val.text, value: val.text } }) })
        } else {
          console.log("Server Error")
        }
      }).then(() => {
        this.setState({loading:false})
      }).catch((error) => {
        console.log(error)
      })
    })
  }


  submit = () => {
    this.setState({loading: true})
    axios({
      method: 'POST',
      url: config.url + config.dest,
      headers: {
        'Accept': 'application/json',
        'X-DreamFactory-Api-Key': secrets.apiKey,
        'Content-Type': 'application/json'
      },
      data: {
        resource: [
          {
            submitter: this.state.submitter,
            cohort: this.state.cohort,
            session: this.state.session,
            player: this.state.player,
            scene: this.state.scene,
            notes: this.state.notes,
            ad: this.state.ad,
            ps: this.state.ps,
            cl: this.state.cl,
            cr: this.state.cr,
            em: this.state.em,
            co: this.state.co,
            it: this.state.it,
            in: this.state.in,
          }
        ]
      }
    }).then((response) => {
      this.setState({loading:false})
      console.log(response.status)
      if (response.status === 200) {
        this.setState({
          notes: '',
          ad: false,
          ps: false,
          cl: false,
          cr: false,
          em: false,
          co: false,
          it: false,
          in: false,
          message: true
        })
        setTimeout(() => {
          this.setState({message:false})
        }, 2500);
        console.log("Submitted successfully")
      } else {
        this.setState({error: true})
        setTimeout(() => {
          this.setState({ error: false })
        }, 2500);
        console.log("Server Error")
      }
    }).catch((error) => {
      this.setState({ error: true })
      setTimeout(() => {
        this.setState({ error: false })
      }, 2500);
      console.log(error)
    })
  }

  handleChange = (e, data) => {
    let change = { [data.name]: data.value }
    this.setState(change)
    console.log(change)
  }

  handleCheck = (e, data) => {
    let change = { [data.name]: data.checked }
    this.setState(change)
    //console.log(change)
  }
  
  render () {
    return (
      <div className='App'>
        <Container>
          <Dimmer active={this.state.loading}>
            <Loader />
          </Dimmer>
          <Header as='h1' className='main-h1'>Weave Data Coding</Header>
          <Form>
            <Segment>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Select}
                  options={this.state.submitter_options}
                  label='Submitter'
                  search
                  name="submitter"
                  onChange={this.handleChange}
                  value={this.state.submitter}
              />
                <Form.Field
                  control={Select}
                  options={this.state.cohort_options}
                  label='Cohort'
                  search
                  name="cohort"
                  onChange={this.handleChange}
                  value={this.state.cohort}
              />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Select}
                  options={this.state.session_options}
                  label='Session'
                  search
                  name="session"
                  onChange={this.handleChange}
                  value={this.state.session}
              />
                <Form.Field
                  control={Select}
                  options={this.state.scene_options}
                  label='Scene'
                  search
                  name="scene"
                  onChange={this.handleChange}
                  value={this.state.scene}
              />
              </Form.Group>
            </Segment>
            <Segment>
              <Form.Field
                control={Select}
                options={this.state.player_options}
                label='Player'
                search
                name="player"
                onChange={this.handleChange}
                value={this.state.player}
            />
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Field
                    control={Checkbox}
                    label={<label>Adaptability - AD</label>}
                    onChange={this.handleCheck}
                    name="ad"
                    checked={this.state.ad}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Problem Solving - PS</label>}
                    onChange={this.handleCheck}
                    name="ps"
                    checked={this.state.ps}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Collaboration - CL</label>}
                    onChange={this.handleCheck}
                    name="cl"
                    checked={this.state.cl}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Creativity - CR</label>}
                    onChange={this.handleCheck}
                    name="cr"
                    checked={this.state.cr}
              />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    control={Checkbox}
                    label={<label>Empathy - EM</label>}
                    onChange={this.handleCheck}
                    name="em"
                    checked={this.state.em}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Communication - CO</label>}
                    onChange={this.handleCheck}
                    name="co"
                    checked={this.state.co}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Initiative - IT</label>}
                    onChange={this.handleCheck}
                    name="it"
                    checked={this.state.it}
              />
                  <Form.Field
                    control={Checkbox}
                    label={<label>Innovation - IN</label>}
                    onChange={this.handleCheck}
                    name="in"
                    checked={this.state.in}
              />
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment>
              <Form.Field
                control={TextArea}
                label='Notes'
                onChange={this.handleChange}
                name="notes"
                value={this.state.notes}
            />
              <Form.Field
                control={Button}
                content='Submit'
                className='button-container'
                onClick={this.submit}
                disabled={this.state.loading}
            />
            </Segment>
          </Form>
          <Transition visible={this.state.message} animation='fade' duration={500}>
            <Message
              positive
              header="Data successfully saved!"
              className="message"
            />
          </Transition>
          <Transition visible={this.state.error} animation='fade' duration={500}>
            <Message
              negative
              header="Error! Data was unable to be saved."
              className="message"
              />
          </Transition>
        </Container>
      </div>
    )
  }
}

import React from 'react'
import {
  Container,
  Form,
  Header,
  Select,
  Checkbox,
  TextArea,
  Button
} from 'semantic-ui-react'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Container>
        <Header as='h1'>Weave Data Coding</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={[{key: 'Max', text: 'Max Ofsa', value: 'Max Ofsa'}, {key: 'Sara', text: 'Sara Sweeney-Bear', value: 'Sara Sweeney-Bear'}]}
              label='Submitter'
              search
            />
            <Form.Field
              control={Select}
              options={[{key: 'Max', text: 'Max Ofsa', value: 'Max Ofsa'}, {key: 'Sara', text: 'Sara Sweeney-Bear', value: 'Sara Sweeney-Bear'}]}
              label='Cohort'
              search
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={[{key: 'Max', text: 'Max Ofsa', value: 'Max Ofsa'}, {key: 'Sara', text: 'Sara Sweeney-Bear', value: 'Sara Sweeney-Bear'}]}
              label='Session'
              search
            />
            <Form.Field
              control={Select}
              options={[{key: 'Max', text: 'Max Ofsa', value: 'Max Ofsa'}, {key: 'Sara', text: 'Sara Sweeney-Bear', value: 'Sara Sweeney-Bear'}]}
              label='Scene'
              search
            />
          </Form.Group>
          <Form.Field
            control={Select}
            options={[{key: 'Max', text: 'Max Ofsa', value: 'Max Ofsa'}, {key: 'Sara', text: 'Sara Sweeney-Bear', value: 'Sara Sweeney-Bear'}]}
            label='Player'
            search
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability - AD </label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Adaptability</label>}
          />
          <Form.Field
            control={TextArea}
            label='Notes'
          />
          <Form.Field
            control={Button}
            content='Submit'
          />
        </Form>
      </Container>
    </div>
  )
}

export default App

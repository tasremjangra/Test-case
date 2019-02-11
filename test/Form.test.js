class Form extends React.Component {

  constructor (props) {
    super(props)
    this.state = {detail: 'null', fname: 'lucky'}
  }
  render () {
    return (
      <div className='form'>
        <span className='child' style={{ color: 'red', fontSize: 10 }}>hello</span>
        <MyComponent id='my-component' />
        <form>
          First Name:<input type='text' ref='fname' id='firstName' style={{ position: 'relative', left: 10 }} />
          Last Name:<input type='text' ref='lname' id='lastName' style={{ position: 'relative', left: 8 }} />
          Eamil Id:<input type='email' ref='Eid' id='emailId' defaultValue='Email' />
          <button onClick={this.red} value='submit' id='submit'>Red</button>
          <p id='root' />
        </form>
      </div>
    )
  }
}

class MyComponent extends React.Component {
  render () {
    return <div />
  }
}

const it = createTest(<Form />)

describe('#className', () => {
  describe('(className)', () => {
    it('passes when the actual matches the expected', (wrapper) => {
      expect(wrapper).to.have.className('form')
      expect(wrapper.find('span')).to.have.className('child')
    })

    it('check for the input ref for First Name', (wrapper) => {
      expect(wrapper).to.have.ref('fname')
      expect(wrapper).to.not.have.ref('tname')
    }, { render: false, shallow: false })

    it('check for the input ref for Last Name', (wrapper) => {
      expect(wrapper).to.have.ref('lname')
      expect(wrapper).to.not.have.ref('kname')
    }, { render: false, shallow: false })

    it('check for the input type for First Name', (wrapper) => {
      expect(wrapper.find('#firstName')).to.have.type('input')
      expect(wrapper.find('#lastName')).to.have.type('input')
    }, { render: false, mount: false })

    it('check for the input ref for Eamil Id', (wrapper) => {
      expect(wrapper).to.have.ref('Eid')
      expect(wrapper).to.not.have.ref('lid')
    }, { render: false, shallow: false })

    it('check for button', (wrapper) => {
      expect(wrapper.find('#submit')).to.have.type('button')
      expect(wrapper.find('#submit')).to.not.have.type('input')
    }, { render: false, shallow: false })

    it('check for the state', (wrapper) => {
      expect(wrapper).to.have.state('detail')
    }, { render: false, shallow: false })

    it('check for the state', (wrapper) => {
      expect(wrapper).to.have.state('fname')
      expect(wrapper).to.not.have.state('xyz')
    }, { render: false })

    it('find the teg name', (wrapper) => {
      expect(wrapper.find('span')).to.have.tagName('span')
    }, { render: false })

    it('find the tag name', (wrapper) => {
      expect(wrapper).to.have.tagName('div')
    }, { render: true })

    it('check for the tag name form', (wrapper) => {
      expect(wrapper.find('form')).to.have.tagName('form')
    })

    it('check for tage name button', (wrapper) => {
      expect(wrapper.find('button')).to.have.tagName('button')
    })

    it('check for the tag name p', (wrapper) => {
      expect(wrapper.find('p')).to.have.tagName('p')
    })

    it('check for the text in span', (wrapper) => {
      expect(wrapper.find('span')).to.have.text('hello')
      expect(wrapper.find('span')).to.not.have.text('olleh')
    })

    it('check for style in span', (wrapper) => {
      expect(wrapper.find('.child')).to.have.style('color')
      expect(wrapper.find('.child')).to.not.have.style('border')
    })

    it('check for span text color', (wrapper) => {
      expect(wrapper.find('.child')).to.have.style('color', 'red')
      expect(wrapper.find('.child')).to.not.have.style('color', 'blue')
      expect(wrapper.find('.child')).to.have.style('fontSize', '10px')
      expect(wrapper.find('.child')).to.not.have.style('fontSize', '12px')
    }, { render: false, shallow: false })

    it('check for style first Name', (wrapper) => {
      expect(wrapper.find('#firstName')).to.have.style('position', 'relative', 'top', '10px')
      expect(wrapper.find('#firstName')).to.not.have.style('position', 'abosulte')
    }, { render: false, shallow: false })

    it('check for the html text', (wrapper) => {
      expect(wrapper.find('.child')).to.have.html().match(/hello/)
    })

    it('check for id match', (wrapper) => {
      expect(wrapper).to.match('.form')
      expect(wrapper).to.not.match('.hello')
    }, { mount: false })

    it('check for id of span', (wrapper) => {
      expect(wrapper.find('span')).to.match('.child')
      expect(wrapper.find('span')).to.not.match('.form')
    })

    it('check for the child Component', (wrapper) => {
      expect(wrapper.find(MyComponent)).to.match('MyComponent')
      expect(wrapper.find(MyComponent)).to.not.match('YourComponent')
    }, { render: false })

    it('check for the value of email input', (wrapper) => {
      expect(wrapper.find('#emailId')).to.have.value('Email')
      expect(wrapper.find('#emailId')).to.not.have.value('email')
    })
  })
})

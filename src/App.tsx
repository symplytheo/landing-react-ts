import { Component } from 'react'
import Navigation from 'sections/Navigation'
import Header from 'sections/Header'
import Features from 'sections/Features'
import About from 'sections/About'
import Services from 'sections/Services'
import Gallery from 'sections/Gallery'
import Testimonials from 'sections/Testimonials'
import Team from 'sections/Team'
import Contact from 'sections/Contact'
import { 
  AboutProps,
  ContactProps,
  FeatureProps,
  HeaderProps,
  ServiceProps,
  TeamProps,
  TestimonialProps
} from 'types'
import JsonData from './data/data.json';

type PageDataType = {
  Header: HeaderProps
  About: AboutProps,
  Contact: ContactProps,
  Features: FeatureProps[],
  Services: ServiceProps[],
  Team: TeamProps[],
  Testimonials: TestimonialProps[]
}
export class App extends Component {
  state = {
    data: {} as PageDataType,
  }

  getData() {
    this.setState({data : JsonData})
  }

  UNSAFE_componentWillMount() {
    this.getData()
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Navigation />
        <Header data={data.Header} />
        <Features data={data.Features} />
        <About data={data.About} />
        <Services data={data.Services} />
        <Gallery />
        <Testimonials data={data.Testimonials} />
        <Team data={data.Team} />
        <Contact data={data.Contact} />
      </div>
    )
  }
}

export default App

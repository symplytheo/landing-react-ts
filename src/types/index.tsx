export type HeaderProps = {
  title?: string,
  paragraph?: string,
}

export type AboutProps = {
  paragraph?: string,
  why?: string[],
  why2?: string[]
}

export type ContactProps = {
  address?: string,
  email?: string,
  phone?: string,
  facebook?: string,
  twitter?: string,
  youtube?: string,
}

export type FeatureProps = {
  title: string,
  text: string,
  icon: string,
}

export type ServiceProps = {
  name: string,
  text: string,
  icon: string,
}

export type TeamProps = {
  name: string,
  job: string,
  img: string,
}

export type TestimonialProps = {
  name: string,
  text: string,
  img: string,
}

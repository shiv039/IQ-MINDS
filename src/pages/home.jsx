import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  // Button,
  // IconButton,
  // Input,
  // Textarea,
  // Checkbox,
} from '@material-tailwind/react'
// import { FingerPrintIcon, UsersIcon } from '@heroicons/react/24/solid';
import { PageTitle, Footer } from '@/widgets/layout'
// import { FeatureCard, TeamCard } from '@/widgets/cards';
import { featuresData, teamData, contactData } from '@/data'

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-4.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-10/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Igniting Young Minds.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Your Gateway to Knowledge. Discover, Learn, Excel.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pt-4">
        <div className="container mx-auto">
          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: 'w-5 h-5 text-white',
                })}
                description={description}
              />
            ))}
          </div> */}
          <div className="mt-40">
            <PageTitle section="About Us"></PageTitle>
            <div className=" mt-20 flex flex-wrap items-center">
              <div className="mx-auto w-full px-4 md:w-5/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Welcome to Ultra Minds Polska, where young minds embark on a
                  journey of discovery and innovation! At Ultra Minds Polska, we
                  believe in nurturing the next generation of innovators,
                  problem solvers, leaders and certainly great human beings.
                  <br />
                  <br />
                  Founded by a small group of professionals with a passion for
                  empowering our children with essential skills for the future,
                  we offer a dynamic learning environment that fosters
                  creativity, critical thinking, and a love for learning.
                  <br />
                  <br />
                  We designed, customized curriculum to engage our children in a
                  variety of exciting subjects, including BrainOMath, Coding +
                  Robotics, Science, Computers, Python, Personality Development,
                  Neuro Linguistic Program (NLP), Public Speaking, and much
                  more. Through hands-on activities, Do It by Yourselves (DIY),
                  interactive lessons, and real-world applications, we aim to
                  inspire curiosity and instill confidence in our children.
                </Typography>
              </div>
              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                  <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src="/img/teamwork.png"
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-3 mt-2 font-bold"
                    >
                      What sets us apart
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      Our team of dedicated educators who are not just teachers
                      but mentors, guiding each child on their educational
                      journey with patience, encouragement, and personalized
                      attention.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our Team */}
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Our Vision"></PageTitle>
          <div className="mx-auto mt-20 mb-24 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: 'w-5 h-5 text-white',
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Our Mission"></PageTitle>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 ">
            <Typography className="font-normal text-blue-gray-500">
              At Ultra Minds, we are driven by a singular mission: to provide a
              dynamic and nurturing learning environment where every child can
              unleash their full potential, cultivate their passions, and
              develop the skills they need to thrive in an ever-changing world.
              <br />
              <br />
              <span className="font-bold">Empowering Potential: </span>We
              believe that every child possesses unique talents and abilities
              waiting to be discovered and nurtured. Our mission is to empower
              each individual to unlock their full potential, encouraging them
              to dream big and reach for the stars.
              <br />
              <br />
              <span className="font-bold">Fostering Passion: </span>Passion is
              the fuel that drives innovation and success. We are committed to
              cultivating a love for learning and encouraging our students to
              explore their interests and pursue their passions with enthusiasm
              and dedication.
              <br />
              <br />
              <span className="font-bold">Preparing for the Future: </span>The
              world of tomorrow requires a new set of skills and competencies.
              Our mission is to equip our students with the knowledge, critical
              thinking abilities, and technological proficiency they need to
              succeed in the 21st century and beyond.
              <br />
              <br />
              <span className="font-bold">
                Partnering with Parents and Communities:{' '}
              </span>
              Education is a partnership between educators, parents, and
              communities. We work closely with parents and caregivers to
              support the holistic development of each child, fostering a strong
              sense of partnership and collaboration in their educational
              journey.
              <br />
              <br />
              Join us in our mission to inspire, empower, and transform lives.
              Together, we can shape a brighter future for the next generation.
            </Typography>
          </div>

          {/* <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form> */}
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  )
}

export default Home

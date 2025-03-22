import Banner from '@/app/_components/homepage/Banner'
import TextWithImages from '@/app/_components/homepage/TextWithImages'
import Services from '@/app/_components/homepage/Services'
import Comments from '@/app/_components/homepage/Comments'
import Associates from '@/app/_components/homepage/Associates'
import FirmHistory from '@/app/_components/homepage/FirmHistory'
import ContactForm from '@/app/_components/homepage/ContactForm'
import Footer from '@/app/_components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <TextWithImages />
      <Services />
      <Associates />
      <Comments />
      <FirmHistory />
      <ContactForm />
      <Footer />
    </>
  )
}



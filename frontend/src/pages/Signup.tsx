import Auth from "../components/Auth"
import Quote from "../components/Quote"


const Signup = () => {
  return (
    <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="invisible md:visible">
                <Quote/>
            </div>
        </div>
    </div>
  )
}

export default Signup

import styles from './auth.module.scss'
import {signIn} from 'next-auth/client'
import {useState} from 'react'
import CountrySelect from '../../components/auth/form/CountrySelect'
export default function SignUp() {
    const [formData, setFormData] = useState({news:true})
    const [error, setError] = useState(null)
    const updateFormData = (e) => {
        console.log(e.target.name)
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className={styles.FormContainer}>
            <form className={styles.Form}>
                <div className={styles.FormGroup}>
                    <textarea value={JSON.stringify(formData)} style={{height: 200}} />
                </div>
                <div className={styles.FormGroup}>
                    <input type="email" name="email" id="email" placeholder="Email Address" onChange={updateFormData} formNoValidate/>
                </div>
                <div className={styles.FormGroup}>
                    <input type="password" name="password" id="password" placeholder="password" onChange={updateFormData}/>
                </div>
                <div className={styles.FormGroup}>
                    <input type="text" name="fname" placeholder="First Name" onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <input type="text" name="lname" placeholder="Last Name" onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <input type="date" placeholder="Date of Birth" name="date" max={new Date().toISOString().split("T")[0]} onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <CountrySelect name="country" onChange={updateFormData}/>
                </div>
                <div className={styles.FormGroup}>
                    <button onClick={(event) => {
                        event.preventDefault()
                        event.target.name = "gender"
                        event.target.value = "male"
                        updateFormData(event)
                    }}>Male</button>
                    <button onClick={(event) => {
                        event.preventDefault()
                        event.target.name = "gender"
                        event.target.value = "female"
                        updateFormData(event)

                    }}>Female</button>
                </div>
                <div className={styles.FormGroup}>
                    <input type="checkbox" name="news" checked={formData.news} onClick={e => {                       
                        if(formData.news) {
                            e.target.value = false
                            e = {
                                target: {
                                    name : "news",
                                    value: false
                                }
                            }
                        }else {
                            e.target.value = true
                            e = {
                                target: {
                                    name : "news",
                                    value: true
                                }
                            }
                        }
                        updateFormData(e)
                    }}/>
                    <label for="news">Sign up for emails to get updates from us on products, offers, and your Member benefits</label>
                </div>
                <div className={styles.FormInfo}>
                    <p>By clicking Sign Up, you agree to our <a href="/somewhere" target="_blank">Terms of Service</a> and <a href="/somewhere" target="_blank">Privacy Policy.</a></p>
                </div>
                
            </form>
        </div>
    )
}
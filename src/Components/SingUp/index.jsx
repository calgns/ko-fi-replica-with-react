
import './style.css';

export const SingUp = (toLog) => {
  return (
    <div className="sing-up text-center">
      <h3 className="font-bold text-xl sm:text-2xl">Sing up. It's free!</h3>

      <section className="form ">
        <div className="inputs flex flex-col place-items-center">
          <div className="name">
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" placeholder="Display Name" />
          </div>

          <div className="email">
            <label htmlFor="email-input">E-mail</label>
            <input type="text" id="email-input" placeholder="Email Adress" />
          </div>

          <div className="password">
            <label htmlFor="password-input">Password</label>
            <input type="text" id="password-input" placeholder="Choose a Password" />
          </div>
        </div>
        
        <div className="submit mt-5">
          <div className="terms text-left">
            <span>Ko-fi is a safe, friendly place. Pages that break our terms will be unpublished. You must be 18 or over to use Ko-fi. </span>
          </div>

          <div className="flex mt-2">
            <input type="checkbox" name="" id="accept-check" />
            <label htmlFor="" className="font-bold max-sm:text-sm pl-2">
              I accept the <a href="" className="font-black underline">terms</a> & <a href="" className="font-black underline">privacy policy</a>
            </label>
          </div>

          <div className="mt-5">
            <button type="submit" className="bg-rose-600 font-bold w-full rounded-full p-3 ">Create account</button>
          </div>
        </div>
      </section>

      <div className="py-4 text-lg font-semibold">
        <span>Or sign up with</span>
        {/* <a href="https://www.flaticon.com/br/icones-gratis/google" title="google ícones">Google ícones criados por Freepik - Flaticon</a> */}
      </div>

      <section className="alternative-sing-up font-bold">
        
          <div className="mt-2 ">
            <a href="https://www.flaticon.com/br/icones-gratis/google" className="google-sing rounded-full" title="google ícones">
              <img src="/src/assets/google.png" alt="" className="h-5 mr-2" /> Google</a>
          </div>

          <div className="mt-6 ">
            <a href="https://www.flaticon.com/br/icones-gratis/google" className="google-sing rounded-full" title="google ícones">
              <img src="/src/assets/facebook.png" alt="" className="h-5 mr-2" /> facebook</a>
          </div>

          <div className="go-log-in mt-9">
            {/* <a href="" className="underline font-normal" onClick={()=>toLog}>Already have an account? Log in here</a> */}
          </div>

      </section>
    </div>
  )
}

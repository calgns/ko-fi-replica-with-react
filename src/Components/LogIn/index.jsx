
export const LogIn = () => (
  <div className="sing-up text-center">
    <h3 className="font-bold text-xl sm:text-2xl">Log In</h3>

    <section className="form ">
      <div className="inputs flex flex-col place-items-center">

        <div className="email">
          <label htmlFor="email-input">E-mail</label>
          <input type="text" id="email-input" placeholder="Example@mail.com" />
        </div>

        <div className="password">
          <label htmlFor="password-input">Password</label>
          <input type="text" id="password-input" placeholder="Password" />
        </div>
      </div>
      
      <div className="submit mt-5">
        <div className="terms text-right">
          <span className="font-bold underline">Forgot password?</span>
        </div>

        <div className="mt-5">
          <button type="submit" className="bg-rose-600 font-bold w-full rounded-full p-3 ">Log in</button>
        </div>
      </div>
    </section>

    <div className="py-4 text-lg font-semibold">
      <span>Or log in with</span>
      {/* <a href="https://www.flaticon.com/br/icones-gratis/google" title="google ícones">Google ícones criados por Freepik - Flaticon</a> */}
    </div>

    <section className="alternative-sing-up font-bold">
      
        <div className="mt-3 ">
          <a href="https://www.flaticon.com/br/icones-gratis/twitter" className="google-sing rounded-full" title="google ícones">
            <img src="/src/assets/twitter.png" alt="" className="h-5 mr-2" /> twitter</a>
        </div>

        <div className="mt-3 ">
          <a href="https://www.flaticon.com/br/icones-gratis/google" className="google-sing rounded-full" title="google ícones">
            <img src="/src/assets/google.png" alt="" className="h-5 mr-2" /> Google</a>
        </div>

        <div className="mt-3 ">
          <a href="https://www.flaticon.com/br/icones-gratis/facebook" className="google-sing rounded-full" title="google ícones">
            <img src="/src/assets/facebook.png" alt="" className="h-5 mr-2" /> facebook</a>
        </div>
    </section>
  </div>
)
import React, {Component} from 'react'
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {}

        // Binded functions;

    };

    // Methods here;

    render(){
        return(
            <div>
<footer class="text-center text-white bgBlack">
  <div class="container p-4">

    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>

    
  </div>

  <div class="text-center p-3">
    © 2021  
    <a class="text-white" href="https://github.com/wictor-parmenis/"> wictortec.com</a>
  </div>
</footer>
            </div>
        )
    }
}   

export default Footer;
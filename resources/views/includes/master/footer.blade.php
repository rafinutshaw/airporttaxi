<!-- start footer Area -->
<footer class="footer-area section-gap">
    <div class="container">
        <div class="row">
            <div class="col-sm-5 offset-1">
                <div class="single-footer-widget">
                    <h6>Quick links</h6>
                    <ul>
                        <li>
                            <router-link to="/career" tag="a">Career</router-link>
                        </li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6 contact-wrapper">
                <div class="single-footer-widget">
                    <h6>Contact</h6>
                    {{-- <p>Let us be social</p> --}}
                    <div class="footer-social d-flex align-items-center">
                        <ul>
                            <li><i class="mr-2 fas fa-phone-alt"></i> {{ config('app.mobile') }}</li>
                            <li><i class="mr-2 fas fa-envelope"></i> <a
                                    href="mailto:{{ config('app.email') }}">{{ config('app.email') }}</a></li>
                            <li class="d-flex flex-inline"><i class="mr-3 fas fa-map-marker-alt"></i>
                                <div>{{ config('app.address') }}</div>
                            </li>
                            <li><h6 >We are licensed by</h6></li>
                            <li>
                                <img src="{{ asset('/images/southcambridge-white.png') }}" alt="" srcset="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="mx-auto footer-text col-lg-12">
                Copyright &copy; All rights reserved |
                <a href="#"><i class="ml-1 fab fa-facebook"></i></a>
                <a href="#"><i class="ml-1 fab fa-twitter"></i></a>
                <a href="#"><i class="ml-1 fab fa-dribbble"></i></a>
                <a href="#"><i class="ml-1 fab fa-behance"></i></a>
                {{--  by <a href="#" target="_blank">Sezan & Utsha</a> --}}
            </p>
        </div>
    </div>
    {{-- <img class="footer-bottom" src="{{ asset("img/footer-bottom.png") }}" alt=""> --}}
</footer>
<!-- End footer Area -->

{{-- <script src="js/vendor/jquery-2.2.4.min.js"></script> --}}
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script> --}}
{{-- <script src="js/vendor/bootstrap.min.js"></script>			 --}}

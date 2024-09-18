import * as React from 'react';
// import "../../styles/Accordian.css"
export function Accordian() {
  return (
        <div className='container-padding-x'>
        <section class="working-process my-5">
            <div class="container">
                <div class="row">
                    <div class="row d-flex flex-nowrap flex-row">
                        <div class="heading d-flex align-items-center">
                            <h2>Our Working Process </h2>
                            <p class="ps-4">Step-by-Step Guide to Achieving Your Business Goals</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="accordion mt-5" id="accordionExample">
                      <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="accordian-numbers">01</span> Consultation
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span class="accordian-numbers">02</span> Research and Strategy Development
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span class="accordian-numbers">03</span> Implementation
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span class="accordian-numbers">04</span> Monitoring and Optimization
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span class="accordian-numbers">05</span> Reporting and Communication
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-4">
                        <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span class="accordian-numbers">06</span> Continual Improvement
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.    
                            </div>
                        </div>
                    </div>                    
                      </div>
                </div>
            </div>
        </section>
        </div>
  );
}
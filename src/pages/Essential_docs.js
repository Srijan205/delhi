import React from 'react'
import './Essential_docs.css'
let faqLabel=document.querySelectorAll(".faq-label");

faqLabel.forEach(item=>item.onclick=()=>{
   //selektuje Answer
   item.nextElementSibling.classList.toggle('active');
   
   
   let labelIcon=item.lastElementChild;
   let icons=labelIcon.lastElementChild;
   icons.classList.toggle('rotate');
 
   
})



const Essential_docs = () => {
  return (
    <div>
        <h3>Essential Documents for a Person with Disability  </h3>
        <p>A person with a benchmark disability as defined above will require a Disability Certificate & Unique Disability ID to avail benefits under various schemes and entitlements.</p>
        <p><strong>Disability Certificate:</strong> Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person.</p>
        <p><strong>Unique Disability ID:</strong> Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts. </p>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>


    <div class='faq'>
    <div class="global-label-text">
    FAQs
    </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What is a Disability Certificate?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person. 
    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What is the process to avail a Disability Certificate?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          Stepwise process of obtaining a disability certificate is as follows:
          <ol >
            <li>The disabled person must visit a Medical Hospital for the specific disability (List attached in <a href='https://docs.google.com/document/d/1qquaTFyppBYAx99zsp8RaS4sNyW5a0i0ccp2NlkEAjs/edit#heading=h.cvuedgdlcltb' target="_blank">Chapter 10.2</a>).</li>
            <li>The doctor will prescribe tests depending on disability.</li>
            <li>Duly filled form as attached in <a href='https://drive.google.com/file/d/1htOJA7ZhMhXiBPcFOcvUcqfKbxxjiTG_/view?usp=sharing' target="_blank">Annexure 1</a> along with documents and test reports need to be submitted to the concerned Doctor in the Medical Hospital.</li>
            <li>A committee of doctors will consider the case and examine the person.</li>
            <li>If approved, the person is asked to collect the certificate at a later date.</li>
          </ol>

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What are the documents required to be submitted by a disabled person to obtain a Disability Certificate?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          <ol >
            <li>Two recent coloured personal photos of the person with disability</li>
            <li>Copy of the I.D. proof (Aadhar Card is best)</li>
            <li>Copy of the address proof (Aadhar Card is best)</li>
            <li>Copies of available medical reports</li>
            <li>Copy of the previous Disability Certificate (in case it is being renewed)</li>
          </ol>

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          How long is the disability certificate valid for?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          For children below the age of 18, the validity is for 5 years, whereas for those over 18, the validity is lifelong.

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What is a Unique Disability ID?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts.

    
          </div>
    
        </div>
      </div>
    <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What is the process to avail a Unique Disability ID (UDID) ?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          <ol >
            <li>Persons with disability to use <a href='https://www.swavlambancard.gov.in/' target="_blank">https://www.swavlambancard.gov.in/</a> website or register with the UDID web portal on <a href='https://www.swavlambancard.gov.in/pwd/application' target="_blank">https://www.swavlambancard.gov.in/pwd/application</a>.</li>
            <li>Using Enrolment Number / UDID Number and Date of Birth, log into the system and click “Apply online for Disability Certificate”. Read instructions and fill out the online application.</li>
            <li>To apply offline, fill out the form as placed in <a href='https://drive.google.com/file/d/1iMAoPOoVFlZRl2tbT0vYe8kH9VXGfjy0/view?usp=sharing' target="_blank">Annexure 2</a>.  It can also be downloaded from <a href='https://www.swavlambancard.gov.in/' target="_blank">https://www.swavlambancard.gov.in/</a>. After filling the application form with personal details, address details, disability details, employment details and identity details,  it should be submitted at the District Disability Rehabilitation Centres (DDRC) along with the required documents as mentioned in point 5 below.</li>
          </ol>
          </div>
    
        </div>
        <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          Is it mandatory to get a UDID?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          UDID certificate is not mandatory for availing any direct benefits for PwDs whereas Disability Certificate is.

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          What are the documents required to be submitted by a disabled person to obtain a UDID?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          <ol >
            <li>Scanned copy of recent colour photo.</li>
            <li>Scanned image of signature (Optional)</li>
            <li>Scanned copy of Address Proof (Aadhar/Driving Licence/State Domicile  etc.)</li>
            <li>Scanned copy of Identity Proof (Aadhar Card/PAN Card/Driving Licence etc.)</li>
            <li>Scanned copy of Disability Certificate (Only for those Persons with Disability who have been issued Disability Certificates by the respective Medical boards constituted at a State or District level. Disability wise list of medical authorities is placed in <a href='https://docs.google.com/document/d/1qquaTFyppBYAx99zsp8RaS4sNyW5a0i0ccp2NlkEAjs/edit#heading=h.cvuedgdlcltb' target="_blank">Chapter 10.2.</a></li>
          </ol>

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          Why is the Government encouraging Disabled Persons to get the UDID card?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          The UDID Card will help in streamlining the tracking of the physical and financial progress of beneficiaries at all levels of hierarchy of implementation – from village level, block level, district level, state level right upto the national level.

    
          </div>
    
        </div>
      </div>
      <div class="faq-container">
        <div class="faq-label">
          <div class="faq-label-text">
          Why is it useful for a disabled person to get a UDID?
          </div>
          <div class="faq-label-icon">
            <span class="material-icons">
              expand_more
            </span>
          </div>
    
        </div>
        <div class="faq-answer ">
          <div class="faq-answer-content">
          The UDID card shall bring a host of benefits to the Persons with Disabilities as given below:
          <ol>
            <li>Persons with disabilities will not need to make multiple copies of documents, maintain, and carry multiple documents as the card will capture all the necessary details which can be decoded with the help of a reader.</li>
            <li>The UDID card will be the single document of identification, and verification of the disabled for availing various benefits in the future.</li>
          </ol>

    
          </div>
    
        </div>
      </div>
      </div>
    </div></div>
  )
}

export default Essential_docs
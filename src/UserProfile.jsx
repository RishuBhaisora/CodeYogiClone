import React from 'react';

function UserProfile({firstName,lastName,photo,country}){
 return (
     
     <div > 
  <div className=" mt-4 w-60 h-60"> 
<img className="object-cover w-[217px] h-40 mx-auto relative top-4    rounded-md " src={photo}></img>
  <h1 className="font-bold text-sm  relative top-8 left-2"> {firstName} {lastName}</h1>
    <h1 className="text-indigo-400 font-bold text-sm relative top-8 left-2 pb-2" >  {country} </h1>
      
    <a href="https://mobile.twitter.com/login?lang=en"> <img className="w-6 relative  bottom-1 left-44" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"></img></a>
 <a href="https://in.linkedin.com/?trk=IN-SEM_google-adwords_Jordan-brand-sign-up&mcid=6844056167778418688&trk2=ga_campid=14650114791_asid=127961666580_crid=545833659343_kw=linkedin_d=m_tid=kwd-285981853_n=g_mt=p_geo=9303981_slid=&gclsrc=aw.ds&gclid=CjwKCAiA866PBhAYEiwANkIneNg1KbPJ0XNLixCfBO53J5a4gVHysgmVhSZ1J8RYH9pzPPbk5Z9fyBoCtTgQAvD_BwE"><img className="w-4  relative bottom-6 left-52"src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img></a>
  </div>
</div>)
 }
export default UserProfile;
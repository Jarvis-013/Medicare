import React, { useState } from "react";
import FAQContainer1 from "./f-a-q-container";
import "./faq.css";


export const Faq = () => {

const[ClickedQuesNum,setClickedQuesNum]=useState(0);
const clicked=(num)=>{
  setClickedQuesNum(num);
}

return (
    <div className=" body relative flex flex-col mt-[30px] mb-[50px]" style={{width:'100vw' ,height:'min-content', justifyContent:'center', alignItems:'center'}}>

      {/* marquee */}
    <div className="faqs mt-[0px] text-[94px] center tracking-[0.01em] leading-[150%] font-michroma text-white text-center inline-block w-[28%]">

        FAQ’s
      </div>

      <div className="conatainers-wrapper mt-[20px] w-[86.31%]" style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
        <FAQContainer1 index="1" Num={ClickedQuesNum} clicked={clicked} ques="What is First Aid?" Ans_h="First aid refers to initial care provided for an illness or injury before professional medical help is available, often crucial for saving lives." ans="First aid refers to initial care provided for an illness or injury before professional medical help is available, often crucial for saving lives." />
        <FAQContainer1 index="2" Num={ClickedQuesNum} clicked={clicked} ques="What are Common Symptoms of Heart Attack?" Ans_h="Common symptoms include chest pain or discomfort, shortness of breath, nausea, lightheadedness, and discomfort in other areas of the upper body." ans="Common symptoms include chest pain or discomfort, shortness of breath, nausea, lightheadedness, and discomfort in other areas of the upper body." />
        <FAQContainer1 index="3" Num={ClickedQuesNum} clicked={clicked} ques="How to Identify a Stroke?" Ans_h="Use the FAST acronym: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services." ans="Use the FAST acronym: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services." />
        <FAQContainer1 index="4" Num={ClickedQuesNum} clicked={clicked} ques="What Are the Symptoms of Allergic Reactions?" Ans_h="Symptoms may include hives, swelling, difficulty breathing, nausea, vomiting, and in severe cases, anaphylaxis." ans="Symptoms may include hives, swelling, difficulty breathing, nausea, vomiting, and in severe cases, anaphylaxis." />
        <FAQContainer1 index="5" Num={ClickedQuesNum} clicked={clicked} ques="What Should I Do for a Burn?" Ans_h="Cool the burn with cool (not cold) water for about 20 minutes, cover with a clean, dry cloth, and seek medical attention if severe." ans="Cool the burn with cool (not cold) water for about 20 minutes, cover with a clean, dry cloth, and seek medical attention if severe." />
        <FAQContainer1 index="6" Num={ClickedQuesNum} clicked={clicked} ques="How Do I Recognize Symptoms of Heat Stroke?" Ans_h="Symptoms include high body temperature, altered mental state, nausea, vomiting, flushed skin, rapid breathing, and rapid pulse." ans="Symptoms include high body temperature, altered mental state, nausea, vomiting, flushed skin, rapid breathing, and rapid pulse." />
        <FAQContainer1 index="7" Num={ClickedQuesNum} clicked={clicked} ques="What Are the Signs of Choking?" Ans_h="Signs include difficulty breathing, coughing, wheezing, inability to speak, and cyanosis (turning blue)." ans="Signs include difficulty breathing, coughing, wheezing, inability to speak, and cyanosis (turning blue)." />
        <FAQContainer1 index="8" Num={ClickedQuesNum} clicked={clicked} ques="How to Provide CPR?" Ans_h="Perform chest compressions at a rate of 100 to 120 per minute, intermixed with rescue breaths, until emergency services arrive." ans="Perform chest compressions at a rate of 100 to 120 per minute, intermixed with rescue breaths, until emergency services arrive." />
      </div>
      
      <div className="STILL-HAVE-QUES mt-[10px] w-[48%] flex flex-col items-center justify-between text-center text-[32px] font-michroma ">
        <div className="still-ques mb-[32px] self-stretch relative flex flex-col items-center justify-center tracking-[0.01em] leading-[130%]">
            Still have a question?

        </div>  
        <div id="last-para" className="relative text-[21px] leading-[150%] font-goldman inline-block w-[100%]">

            Feel free to reach out for clarifications and inquiries.
        </div>   
      </div>
    </div>
    );
};
export default Faq;

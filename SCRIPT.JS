let bnt=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12)
        speak("good morning")
        //  console.log(hours)
    else if(hours>=12 && hours<16){
        speak("Good afternon Sir")

    }else{
        speak("good evening Sir")
    } 
}
window.addEventListener('load',()=>{
     wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
  let currentindex=  event.resultIndex
  let transcript = event.results[currentindex][0].transcript
  content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
bnt.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(messege){
     btn.style.display="flex"
      voice.style.display="none"
    if(messege.includes("hello")||messege.includes("hey")){
        speak("helo sir, what can i help you ?")
    }
    else if(messege.includes("who are you ")){
        speak(" i am virtual assistant, created by vivek chaudhary sir ")
    }else if(messege.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }else if(messege.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }else if(messege.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")
    }else if(messege.includes(" time ")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric",})
        speak(time)
    }else if(messege.includes(" day ")){
            let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
            speak(date)
            
    }else{
        let finaltext="this is what i found on internet regarding"+ messege.replace("valis","")||messege.replace("balis","")
        speak(finaltext)
        window.open(`https://www.google.com/search?q=${messege.replace("valis","")||messege.replace("balis","")}`,"_blank")
    }

    
}
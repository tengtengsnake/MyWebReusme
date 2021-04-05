class DigitalCLock{
    constructor(elememt){
        this.element=element;
    }

    start(){
        this.update();

        setInterval(()=> {
            this.update();
        },1);
    }

    update(){
        const parts=this.getTimeParts();
        const minuteFormatted=parts.minutes.toString().padStart(2,"0");
        const timeFormatted='${parts.hour}:$(minuteFormatted)';
        const amPm=parts.isAm ?"AM":"PM";

        this.element.querySelector(".clock-time").textContent=timeFormatted;
        this.element.querySelector(".clock-ampm").textContent=amPm;
    }

    getTimeParts(){
        const now=new Date();

        return{
            hour:now.getHours() %12 || 12,
            minute:now.getMinutes(),
            isAm:now.getHours()<12
        };
    }

}
const clockElemenet=document.querySelector(".clock");
const clockObject=new DigitalCLock(clockElement)


clockObject.start();
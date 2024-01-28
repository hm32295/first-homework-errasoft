import Card from "./Card";
import "./index.css";


export default function HeroSection(){
    return(
        <div className="Cards">
            <Card imgName="degree1.png" Name="COMPANY One" description="Sample text. Click to select the text box."/>
                <Card imgName="degree2.png" Name="COMPANY Two" description="Sample text. Click to select the text box."/>
                <Card imgName="degree3.png" Name="COMPANY Three" description="Sample text. Click to select the text box."/>
                <Card imgName="degree4.jpg" Name="COMPANY Four" description="Sample text. Click to select the text box."/>
        </div>
    );

} 
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Contact() {
    return (
        <>
            <Header/>

            <main>
                <h1>Contact me</h1>
                <p>
                    If you're interested, shoot me a message with your inquiry on one of the chosen methods below. I
                    will try to respond as quickly as possible.
                </p>
                <h2>Social Media</h2>
                <div className="contact">
                    <a href="https://github.com/HardBoss07" target="_blank">GitHub - @HardBoss07</a>
                    <a href="https://discord.com" target="_blank">Discord - @m4tt3o</a>
                    <a href="https://steamcommunity.com/id/m4tt3o_woof/" target="_blank">Steam - @m4tt3o_woof</a>
                </div>

                <h2>Personal Email</h2>
                <div className="contact">
                    <a href="mailto:matteobosshard@gmail.com">matteobosshard@gmail.com</a>
                    <a href="mailto:matteo@bosshard.net">matteo@bosshard.net</a>
                </div>

                <h2>School Email</h2>
                <div className="contact">
                    <a href="mailto:matteo.bosshard@wiss-edu.ch">matteo.bosshard@wiss-edu.ch</a>
                </div>

            </main>

            <Footer/>
        </>
    );
}

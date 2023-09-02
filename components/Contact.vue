<template>
    <div class="o-contact">
        <span class="material-symbols-outlined" @click="openContactOverlay()">comment</span>
        <div class="contact-overlay">
            <form id="contact-form">
                <p><strong>Contact</strong><br />
                Got spooky inquiries or ghostly suggestions? We're dying to hear from you! Reach out... if you dare.
                Stay creepy, and we'll get back to you in the twitch of a witch's nose! 
                <!-- Please let me know if I'm missing something, if anything is incorrect or how much you like Halloween. -->
                </p>
                <br />
                <span class="material-symbols-outlined" @click="closeContactOverlay()">close</span>
                <input type="hidden" name="contact_number">
                <label>Name</label><br />
                <input type="text" name="user_name">
                <br />
                <label>Email</label><br />
                <input type="email" name="user_email">
                <br />
                <label>Message</label><br />
                <textarea name="message"></textarea>
                <br />
                <input type="submit" value="Send">
            </form>
        </div>
    </div>
</template>
<script>


    export default {
        head() {
            return {
                script: [
                    {
                        src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",
                        defer: true
                    }
                ]
            }
        },
        mounted(){
             (function() {emailjs.init('2BAF5WtLGGZ8Vbw_k');})();

            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service_bzosz0g', 'template_872dun2', this)
                    .then(function() {
                        //console.log('SUCCESS!');
                        alert('Thanks for the message!')
                        document.getElementsByClassName('contact-overlay')[0].style.display = "none"
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        },
        methods: {
            openContactOverlay(){
                document.getElementsByClassName('contact-overlay')[0].style.display = "flex"
            },
            closeContactOverlay(){
                document.getElementsByClassName('contact-overlay')[0].style.display = "none"
            }
        }
    }
</script>

<style scoped lang="scss">
    .o-contact {
        color: $purple;
        background-color: $green;
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: $highlight;
        }
    }
    .contact-overlay {
        position: fixed;
        top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.8);
        // display: flex;
        display:none;
        justify-content: center;
        align-items: center;
    }
    #contact-form {
        background-color: $purple;
        position: relative;
        border: 1px solid $green;
        color: $green;
        padding: 15px;
        width: calc(90% - 30px);
        max-width: 300px;
        border-radius: 5px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        line-height: 1.5rem;
        input, textarea {
            margin-bottom: 10px;
            width: calc(100% - 25px);
            padding: 10px;
            font-size: 1rem;
            font-weight: 300;
            border: none;
        }
        textarea {
            min-height: 100px;
        }
        input[type=submit]{
            width: calc(100% - 5px);
            border:0px;
            background-color: $green;
            transition: all 0.5s;
            cursor: pointer;
            margin-top: 5px;
            &:hover {
                background-color: $highlight;
            }
        }
        .material-symbols-outlined {
            position: absolute;
            right: -23px;
            top: -23px;
        }
        p {
            padding:0px;
            margin: 0px;
        }
    }
</style>
<template>
 
  <div class="contact">
    <a href="http://www.hairyghost.com" class="close" @click="this.$nuxt.refresh()">x</a>
    <h1>Contact</h1>
    <p>Hello!</p> <p>Please let me know if I'm missing something, I'm here to help and I appreciate your help.</p>
    
<form action="https://app.headlessforms.cloud/api/v1/form-submission/J2Q9QMev9W" method="POST">
     <input type="text" name="name"  placeholder="Name"><br />
     <input type="email" name="email" placeholder="Email"><br />
     
     <textarea type="text" name="message" required placeholder="Message"></textarea><br />
     <input type="text" name="website"  placeholder="Website"><br />
    <button type="submit">submit</button>
</form>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
  h1 {
    font-family: 'Creepster', cursive;
    margin:0;
    padding:0;
    font-size:2rem;
  }
  p {
    font-size:1.1rem;
  }
  .contact {
    color:$green;
    width:calc(100% - 40px);
    max-width:500px;
    margin:50px auto;
    background-color:$purple;
    padding:20px;
    border-radius:5px;
    position: relative;
  }
  form {
    width:calc(100% - 30px);
    max-width:400px;
    margin:auto;
  }
  input, textarea {
    width:100%;
    padding:10px 15px;
    margin-bottom:15px;
    border:none;
    outline:none;
    border-radius:4px;
  }
  textarea {
    min-height:80px;
  }
  button {
    margin:0 0 25px 0;
    background-color: $green;
    border:none;
    outline:none;
    width:calc(100% + 30px);
    padding:10px 30px;
    cursor:pointer;
    border-radius:4px;
    transition:background-color .5s;
    &:hover {
      background-color: $orange;
    }
  }
  .close {
    position: absolute;
    right:15px;
    top:10px;
    background-color:$green;
    color: $purple;
    font-size: 1.8rem;
    font-weight:300;
    border-radius:50%;
    padding:0px 8px 5px 8px;
    line-height:1.5rem;
    border:2px solid $white;
  }
  a {
    text-decoration: none;
  }
</style> 

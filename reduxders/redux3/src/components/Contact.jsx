import React from "react";
export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta et
        reiciendis totam officiis sit praesentium quis fuga! Assumenda corporis
        nisi officiis fugit dicta reiciendis culpa, aut neque explicabo,
        perspiciatis praesentium!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.8943849515576!2d29.05281757735769!3d41.11499761284485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca7b0ff3b78b%3A0x57013ce307e6f7de!2zxLBzdGlueWUsIMSwc3RpbnllIENkLiBObzo1NCwgMzQ0NjAgU2FyxLF5ZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1721394775435!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: 0, margintp: 10 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </form>
    </div>
  );
}

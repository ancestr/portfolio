import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.css']
})
export class ContactMeSectionComponent {
  
  myForm = new FormGroup({
    nameForm: new FormControl('', Validators.required),
    emailForm: new FormControl('', [Validators.email, Validators.required]),
    phoneForm: new FormControl(''),
    messageForm: new FormControl('', Validators.required)
  });

  input1Clicked:boolean = false;
  input2Clicked:boolean = false;
  input3Clicked:boolean = false;
  input4Clicked:boolean = false;
  
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  buttonShake:boolean = false;
  
  sendEmail() {
    if (this.myForm.valid) {
      const templateParams = {
        name: this.myForm.controls.nameForm.value,
        email: this.myForm.controls.emailForm.value,
        phone: this.myForm.controls.phoneForm.value,
        message: this.myForm.controls.messageForm.value,
      };
      emailjs.send('contact_service', 'contact_form', templateParams, 'L9zfzJVGLca_f_xcm')
        .then(() => {
          alert('Email sent successfully!. Thanks.');
        })
        .catch((error) => {
          alert('Error sending email: ${error}');
          console.error('Error sending email:', error);
        });
      
      this.myForm.reset()
    } else {
      this.invalidAnimation()
    }
  }

  invalidAnimation() {
    this.buttonShake = true;
    setTimeout(() => {
      this.buttonShake = false;
    }, 400);
  }

  handleMouseMove(event: MouseEvent) {
    // (x-(Tx/2); y-(Ty/2)) formula para mover el eje 0;0 al eje central y calcular
    // a partir de este nuevo eje la posicion de x e y
    const element = event.target as HTMLElement;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left; // Coordenada x relativa al elemento
    const y = event.clientY - rect.top; // Coordenada y relativa al elemento
    
    // Calcula los valores de transformación en función de las coordenadas x e y
    const scaleX = -(this.calculateScaleX(x, rect.width));
    const scaleY = this.calculateScaleY(y, rect.height);
    
    // Aplica la transformación al elemento
    element.style.transform = `perspective(300px) rotateX(${scaleY}deg) rotateY(${scaleX}deg) scale3d(1.1, 1.1, 1.1)`;
  }
  
  calculateScaleX(x: number, width: number): number {
    return (x - ( width/2))/10;
  }
  
  calculateScaleY(y: number, height: number): number {
    return (y - ( height/2))/10;
  }

  resetElement(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.style.transform = 'none';
  }
}

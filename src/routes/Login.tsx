import { IonCardHeader, IonItem, IonLabel,IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCardContent, useIonLoading, useIonAlert } from "@ionic/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from 'ionicons/icons';

function Login() {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const onSubmit = async(event: any) => {
     event.preventDefault();

    await present ({message: 'loading...'});
    
    setTimeout(() => {
      dismiss();
      alert({
        header: 'Invalid credentials',
        message: 'There is no user with that name and password.',
        buttons: [{text: 'Ok'}]
      });
      // navigate("/app/dashboard");
    }, 1500);
  };
  return ( 
    <IonCard>
      <IonCardContent>
        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>

          <div className="ion-margin-top">
            <IonButton expand="full" type="submit" color="secondary">
              <IonIcon icon={ logIn } slot="start"/>
            Login</IonButton>
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
}

export default Login;

import React from 'react';

import Typography from '@material-ui/core/Typography';

import Description from '../../../components/Description/Description';

export default function Desc() {
  return (
    <Description>
      <ul>
        <li>
          <Typography>
            Il pulsante <i>Aggiungi ping listener</i> aggiunge sul processo main
            un handler per l&apos;evento <code>asynchronous-message</code>
          </Typography>
        </li>
        <li>
          <Typography>
            Il pulsante <i>Aggiungi pong listener</i> aggiunge sul processo
            renderer un handler per l&apos;evento{' '}
            <code>asynchronous-reply</code>. Quest&apos;evento viene lanciato
            dal processo main una volta che ha ricevuto ed elaborato la
            richiesta effettuata tramite l&apos;evento{' '}
            <code>asyncronous-message</code>.
          </Typography>
        </li>
        <li>
          <Typography>
            Il pulsante <i>Ping</i> invia lancia un evento{' '}
            <code>asyncronous-message</code>.
          </Typography>
        </li>
      </ul>

      <Typography color="secondary">
        Per eseguire correttamente la demo è necessario prima aggiungere i
        listener e poi effettuare il ping.
      </Typography>
    </Description>
  );
}

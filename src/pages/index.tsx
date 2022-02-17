import styles from '@styles/Home.module.scss';

import React, { useEffect, useRef, useState } from 'react';

import { DefaultSeo } from 'next-seo';
import { Grid } from '@mui/material';


import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';

// COMPONENTS
import Navbar from '@components/Navbar';
import Note from '@components/Note';

// CONTEXTS
import { useTheme } from '@context/ThemeContext';

export default function Home() {
  const {theme} = useTheme();

  const [note, setNote] = useState({
      title: '',
      text: '',
      author: '',
      isEditable: true
  });

  return (
    <>
    <DefaultSeo
      title="Notes - Escreva suas ideias e compartilhe com o mundo."
      description="Escreva suas ideias e compartilhe com o mundo. Totalmente grátis, fácil e sem limites."
      additionalLinkTags={
        [
            {
                rel: "icon",
                href: "/images/minified/favicon.webp",
            }
        ]
      }
    />
    <div className={styles.home} style={{
        backgroundColor: `${theme.pallet.background}`,
    }}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <Grid container justifyContent={"center"} className={styles.note_container}>
        <Grid item xs={11} md={6} lg={5}>
          <div className={styles.note}>
            <Note title={note.title} text={note.text} author={note.author} isEditable={note.isEditable}></Note>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

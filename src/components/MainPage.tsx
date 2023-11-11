import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import exampleImage from '../assets/example-image.jpg';
import Box from '@mui/system/Box';

function MainPage() {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          backgroundColor: "#AED6F1"
        }}
        pt={6}
        pb={6}
      >
        <Typography variant="h2" fontWeight={600}>
          הודיה פנסאפורקאר
        </Typography>
        <Typography variant="h5">
          קלינאית תקשורת התפתחותית
        </Typography>
      </Grid>

      <Grid
        container
        item
        sx={{
          justifyContent: "center",
          alignItems: "center"
        }}
        pt={6}
        pb={6}
      >
        <Grid item xs={6}>
          <img src={exampleImage} />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Typography variant="h4" fontWeight={600} sx={{ textDecoration: 'underline' }} mb={2}>
            עליי
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant='body1'
              sx={{
                maxWidth: 350
              }}
            >
              קלינאית תקשורת לילדים, בעלת ניסיון בעבודה במכון להתפתחות הילד ובהנחיית קבוצות למיומנויות חברתיות. אני עוסקת בטיפול בילדים בגילאי הגן ועד לביה"ס היסודי בתחומי השפה, הדיבור והתקשורת.
              הטיפול מבוסס על הגישה ההתפתחותית טבעית, המתאפיינת בלמידה חוויתית באמצעות משחק והנאה. לכל ילד נבנית תוכנית טיפולית המותאמת לצרכים ולתחומי העניין שלהם.
              <br /><br />
              :אני מאמין
              <br />
              יצירת קשר של אמון עם ילדכם ואיתכם ההורים הוא הבסיס לחולל שינוי, להתקדם ולהתמודד עם אתגרים. קשר זה הוא המפתח לשיתוף פעולה מיטבי של הילד, העלאת תחושת המסוגלות והנאה משותפת.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sx={{
          justifyContent: "center",
          alignItems: "center"
        }}
        pt={6}
        pb={6}
      >
        <Grid
          item
          xs={6}
        >
          <Typography variant="h4" fontWeight={600} sx={{ textDecoration: 'underline' }} mb={2}>
            קבוצת מיומנויות חברתיות
          </Typography>
          <Typography variant="body1">
            קבוצה זו מיועדת לילדים בגילאי הגן אשר זקוקים לתגבור
          </Typography>
          <Typography variant="body1">
            .במגוון מיומנויות רגשיות וחברתיות
          </Typography>
          <Typography variant="body1">
            זוהי מסגרת קבוצתית בהם הילדים, כקבוצה, מתנסים
          </Typography>
          <Typography variant="body1">
            .במגוון של משימות חברתיות בצורה של משחק וכיף
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Typography variant="h4" fontWeight={600} sx={{ textDecoration: 'underline' }} mb={2}>
            טיפול פרטני
          </Typography>
          <Typography variant="body1">
            טיפול לילדים בגיל גן עם קשיים בהבנת
          </Typography>
          <Typography variant="body1">
            והבעת השפה- אוצר מילים דל, קשיי תחביר
          </Typography>
          <Typography variant="body1">
            ודקדוק, קושי בארגון מסר מילולי, קשיי
          </Typography>
          <Typography variant="body1">
            .שליפה, אוטיזם, אילמות סלקטיבית ועוד
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          backgroundColor: "#AED6F1"
        }}
        pt={6}
        pb={6}
      >
        <Typography variant="h4" fontWeight={600} sx={{ textDecoration: 'underline' }} mb={2}>
          צור קשר
        </Typography>
        <Typography variant="body1">
          מספר טלפון: 052-8814090
          <br />
          hodayaph@gmail.com :כתובת מייל

        </Typography>
      </Grid>
    </Grid>
  );
}

export default MainPage;

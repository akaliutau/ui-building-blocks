import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  actions: {
    justifyContent: 'center'
  }
});

const PerformingActions = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardHeader
      title="John Smith"
      subheader="Legend"
      avatar={
        <Avatar>
          <PersonIcon />
        </Avatar>
      }
    />
    <CardContent>
      <Typography variant="caption">Resume</Typography>
      <Typography>
        Some filler text.
      </Typography>
    </CardContent>
    <CardActions disableActionSpacing className={classes.actions}>
      <IconButton>
        <ContactMailIcon />
      </IconButton>
      <IconButton>
        <ContactPhoneIcon />
      </IconButton>
    </CardActions>
  </Card>
));

export default PerformingActions;

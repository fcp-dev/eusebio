import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import '../styles/news.scss';

type NewsItemProps = {
  title: string,
  date: string,
  link: string,
  preview: string
}

export default function NewsItem({ title, date, link, preview }: NewsItemProps) {
  const { t } = useI18next();

  const regex = /(<([^>]+)>)/ig;
  const filteredPreview = preview.replace(regex, '');

  return(
    <div className="card">
      <Card className="news-item">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
            {filteredPreview}
          </Typography>
        </CardContent>
        <CardActions className="news-actions">
          <Button size="small">
            <Link to={link}>
              {t("readMore")} ...
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

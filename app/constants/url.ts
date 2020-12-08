const appUrl = `file://${__dirname}/app.html#`;

function url(part: string): string {
  return `${appUrl}${part}`;
}

export default url;

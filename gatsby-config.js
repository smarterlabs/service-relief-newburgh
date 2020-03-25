require(`dotenv`).config({ silent: true })

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-service-relief`,
      options: {
        authorName: `Smarter Labs`,
        authorLink: `https://smarterlabs.com/`,
      },
	 },
	{
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			trackingId: process.env.GOOGLE_ANALYTICS_ID,
		},
	},
  ],
}

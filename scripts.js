document.addEventListener('DOMContentLoaded', () => {
    const socialMediaData = {
        facebook: {
            posts: 120,
            followers: 5000,
            engagement: 5.2
        },
        twitter: {
            posts: 350,
            followers: 8000,
            engagement: 3.8
        },
        instagram: {
            posts: 220,
            followers: 12000,
            engagement: 7.4
        }
    };

    function updateDashboard() {
        document.getElementById('facebookPosts').textContent = socialMediaData.facebook.posts;
        document.getElementById('facebookFollowers').textContent = socialMediaData.facebook.followers;
        document.getElementById('facebookEngagement').textContent = `${socialMediaData.facebook.engagement}%`;

        document.getElementById('twitterPosts').textContent = socialMediaData.twitter.posts;
        document.getElementById('twitterFollowers').textContent = socialMediaData.twitter.followers;
        document.getElementById('twitterEngagement').textContent = `${socialMediaData.twitter.engagement}%`;

        document.getElementById('instagramPosts').textContent = socialMediaData.instagram.posts;
        document.getElementById('instagramFollowers').textContent = socialMediaData.instagram.followers;
        document.getElementById('instagramEngagement').textContent = `${socialMediaData.instagram.engagement}%`;
    }

    updateDashboard();
});

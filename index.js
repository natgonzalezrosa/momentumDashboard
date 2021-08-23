/**
 * Challenge part 2: Display the image's author
 * 
 * With the data you've already fetched, display the name of the 
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 * 
 * Don't worry about positioning the author in the lower-left yet.
 */

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
    })
    
/**
 * {
	id: "KMn4VEeEPR8",
	created_at: "2017-10-09T01:04:47-04:00",
	updated_at: "2021-06-02T09:02:25-04:00",
	promoted_at: "2017-10-09T09:31:35-04:00",
	width: 4621,
	height: 3072,
	color: "#c0c0c0",
	blur_hash: "LXL|_q}qn$IoPAn%Rjj?ogNboLs:",
	description: "The last night of a two week stay on the North Shore of Oahu, Hawaii.",
	alt_description: "seashore during golden hour",
	urls: {
		raw: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1",
		full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=85",
		regular: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=1080",
		small: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=400",
		thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=200"
	},
	links: {
		self: "https://api.unsplash.com/photos/KMn4VEeEPR8",
		html: "https://unsplash.com/photos/KMn4VEeEPR8",
		download: "https://unsplash.com/photos/KMn4VEeEPR8/download",
		download_location: "https://api.unsplash.com/photos/KMn4VEeEPR8/download?ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg"
	},
	categories: [],
	likes: 8437,
	liked_by_user: false,
	current_user_collections: [],
	sponsorship: null,
	user: {
		id: "qlQ_KKvUq7k",
		updated_at: "2021-06-02T15:34:44-04:00",
		username: "seantookthese",
		name: "Sean O.",
		first_name: "Sean",
		last_name: "O.",
		twitter_username: "notseano",
		portfolio_url: "http://www.seanoulashin.com",
		bio: "22-year-old magician and lifestyle photographer living in Portland, Oregon.",
		location: "Portland, OR",
		links: {
			self: "https://api.unsplash.com/users/seantookthese",
			html: "https://unsplash.com/@seantookthese",
			photos: "https://api.unsplash.com/users/seantookthese/photos",
			likes: "https://api.unsplash.com/users/seantookthese/likes",
			portfolio: "https://api.unsplash.com/users/seantookthese/portfolio",
			following: "https://api.unsplash.com/users/seantookthese/following",
			followers: "https://api.unsplash.com/users/seantookthese/followers"
		},
		profile_image: {
			small: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
			medium: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
			large: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
		},
		instagram_username: "notseano",
		total_collections: 0,
		total_likes: 6,
		total_photos: 8,
		accepted_tos: true,
		for_hire: false
	},
	exif: {
		make: "Canon",
		model: "Canon EOS REBEL T3i",
		exposure_time: "1/250",
		aperture: "4.5",
		focal_length: "10.0",
		iso: 200
	},
	location: {
		title: "North Shore, Waialua, United States",
		name: "North Shore, Waialua, United States",
		city: "Waialua",
		country: "United States",
		position: {
			latitude: 21.5616575,
			longitude: -158.0715983
		}
	},
	views: 116340693,
	downloads: 1237140
}
/index.html
 */
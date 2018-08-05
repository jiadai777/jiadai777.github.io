import webbrowser


class Movie():
    def __init__(self, movie_title, movie_storyline, poster_image,
                 trailer_youtube):
        # defines the properties of a Movie class
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    def show_trailer(self):
        # open the trailer link on Youtube
        webbrowser.open(self.trailer_youtube)

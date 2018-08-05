import media
import fresh_tomatoes

# Create a list of movie objects
toy_story = media.Movie('Toy Story',
                        'The story of a boy and his toys that come to life.',
                        'img/toy_story.jpeg',
                        'https://www.youtube.com/watch?v=KYz2wyBy3kc')
avatar = media.Movie('Avatar', 'A marine on an alien planet',
                     'img/avatar.jpg',
                     'https://www.youtube.com/watch?v=5PSNL1qE6VY')
school_of_rock = media.Movie('School of Rock',
                             'Using rock music to learn.',
                             'img/school_of_rock.jpg',
                             'https://www.youtube.com/watch?v=XCwy6lW5Ixc'
                             )
the_great_wall = media.Movie('The Great Wall',
                             'A man had an adventure at the Great Wall',
                             'img/the_great_wall.jpg',
                             'https://www.youtube.com/watch?v=avF6GHyyk5c'
                             )
arrival = media.Movie('Arrival',
                      'A linguist teaches and learns from with aliens',
                      'img/arrival.jpg',
                      'https://www.youtube.com/watch?v=tFMo3UJ4B4g')
inception = media.Movie('Inception',
                        "A group steals information from dreams",
                        'img/inception.jpg',
                        'https://www.youtube.com/watch?v=YoHD9XEInc0')
inside_out = media.Movie('Inside Out',
                         "The adventure of a girl's emotions.",
                         'img/inside_out.jpeg',
                         'https://www.youtube.com/watch?v=seMwpP0yeu4')
frozen = media.Movie('Frozen',
                     "A princess freezes the land with magic.",
                     'img/frozen.jpg',
                     'https://www.youtube.com/watch?v=TbQm5doF_Uc')
fantastic_beasts = media.Movie('Fantastic Beasts',
                               'A boy with magical beasts came to America.',
                               'img/fantastic_beasts.jpg',
                               'https://www.youtube.com/watch?v=VYZ3U1inHA4'
                               )

# Store movie objects in an array
movies = [
    toy_story,
    avatar,
    school_of_rock,
    the_great_wall,
    arrival,
    inception,
    inside_out,
    frozen,
    fantastic_beasts,
    ]

# Display the movies on a weboage
fresh_tomatoes.open_movies_page(movies)

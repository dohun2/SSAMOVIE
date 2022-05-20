import json
import requests

def movie_info(movies_list):
    result = []
    genre_list = [{"pk": 28, "name": "액션"}, {"pk": 12, "name": "모험"}, {"pk": 16, "name": "애니메이션"}, {"pk": 35, "name": "코미디"}, {"pk": 80, "name": "범죄"}, { "pk": 99, "name": "다큐멘터리"}, { "pk": 18, "name": "드라마"}, { "pk": 10751, "name": "가족"}, { "pk": 14, "name": "판타지"}, { "pk": 36, "name": "역사"}, { "pk": 27, "name": "공포"}, { "pk": 10402, "name": "음악"}, { "pk": 9648, "name": "미스터리"}, { "pk": 10749, "name": "로맨스"}, { "pk": 878, "name": "SF"}, { "pk": 10770, "name": "TV 영화"}, { "pk": 53, "name": "스릴러"}, {"pk": 10752, "name": "전쟁"}, {"pk": 37, "name": "서부"}]
    key_list = ["poster_path", "adult", "overview", 'release_date', 'id', 'original_title', 'original_language', 'title', 'backdrop_path', 'popularity', 'vote_count', 'video', 'vote_average']
    i = 11
    for movie in movies_list:
            fields = {}
            # print(movie)
            for key in key_list:
                try:
                    fields[key] = movie[key]
                except:
                    continue
                for genres in genre_list:
                # 장르 리스트 순회
                    try:
                        if movie['genre_ids'][0] == genres["pk"]:
                        # 장르 아이디와 일치한다면
                            genre_name = genres["name"]
                            fields['genre'] = genre_name
                    except:
                        continue
            # print(fields)
            info = { 
                "model": "movies.movie",
                "pk": i,
            }
            info["fields"] = fields
            result.append(info)
            i += 1
    with open('popular.json', 'w', encoding="utf-8") as f:
        json_string = json.dump(result, f, indent=2,  ensure_ascii=False)
    return json_string


def make_json():
    URL = 'https://api.themoviedb.org/3'
    path = '/movie/popular'
    params = {
        'api_key': 'c88ca4ddddf599c5d3fc801df3cbee4c',
        'language': 'ko',
        'region': 'KR',
        'page': 2,
    }
    response = requests.get(URL+path, params=params).json()
    return response['results']

data = make_json()
movie_info(data)
FROM mongo

COPY users.json /users.json

CMD mongoimport --host mongodb --db reach-engine --collection MyDummyCollection --type json --file /init.json --jsonArray
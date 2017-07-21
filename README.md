JavaScript Project Specs

Sports Dashboard

Sports fans want to be able to view relevant sporting events on a dashboard. With a sport of your choice, use an existing API or create a new API to display information about fixtures, news and travel information for events.

Possible APIs to use:

UFC: http://ufc-data-api.ufc.com/api/v1/us
Football: http://api.football-data.org/index
Triathalon: https://developers.triathlon.org/docs
MVP

Display upcoming events on a map
Display results and ranking of players/teams
Allow users to add events to a favourites list






<!--  INSTRUCTIONS FOR USING GIT AS PART OF A TEAM  -->
# gig-js

## Setup

type 'npm install' and press enter
open tab, run 'mongod'
open tab, run 'mongo' then type:
    'use gigs'
    ' db.listings.insert({name: 'test'}) '
    ' db.listings.find() ' to check that you have entered some data
    ctrl-c to quit mongo - we no longer need that
open tab, run 'npm start'
open tav, rn 'npm run build'

check that '/' logs some item from db
check that '/api/listings' is working as expected

## Working

Ensure mongod, webpack and server are running.
That's:
1. `npm start`
2. `npm run build`
3. `mongod`

## Making a feature
1. `git checkout develop`
2. `git pull origin develop`
3. `git checkout -b <featureName>`
4. -- SOME SICK CODE --
6. -- COMMIT OFTEN YOU HEATHENS --
7. MAKE SURE YOU HAVE COMMITED YOUR CHANGES
8. NO REALLY CHECK...
9. ARE YOU SURE?
10. `git push origin <featureName>`
11. `git checkout develop`
12. `git pull`
13. `git checkout <featureName>`
14. `git merge develop`
15. -- POSSIBLY RESOLVE SOME GIT MERGE CONFLICTS --
16. `git push origin <featureName>`
17. `git checkout develop`
18. `git merge <featureName>`
19. `git push origin develop`
20. `git branch -d <featureName>`
21. `git push origin :<featureName>`

DONE!

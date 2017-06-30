# Setup

type 'npm install' and press enter
open tab, run 'mongod'
open tab, run 'mongo' then type:
    'use gigs'
    ' db.listings.insert({name: 'test'}) '
    ' db.listings.find() ' to check that you have entered some data
    ctrl-c to quit mongo - we no longer need that piece of shit
open tab, run 'npm start'
open tav, rn 'npm run build'

check that '/' logs some item from db
check that '/api/listings' is working as expected

# Working

Ensure mongod, webpack and server are running.

# Making a feature
git checkout develop
git pull origin develop
git checkout -b <featureName>
-- SOME SICK CODE --
/// MAKE A FILE WITH YOUR OWN NAME: mungoDewar.md
-- COMMIT OFTEN YOU HEATHENS --
MAKE SURE YOU HAVE COMMITED YOUR CHANGES
NO REALLY CHECK...
ARE YOU SURE?
git push origin <featureName>
git checkout develop
git pull
git checkout <featureName>
git merge develop
-- POSSIBLY RESOLVE SOME GIT MERGE CONFLICTS --
git push origin <featureName>
git checkout develop
git merge <featureName>
git push origin develop
git branch -d <featureName>
git push origin :<featureName>

DONE!

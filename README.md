Download and unzip the following repo: https://github.com/timpugh/amplify-application-demo-source

Open the unzipped folder in Visual Studio Code and open a terminal in visual studio code and navigate to the root of the project (amplify-application-demo-source)

Go to github and make a new repo named "amplify-application-demo". Do not make a README, .gitignore, or choose a license. Make the repo private.

rm -rf .\.git (Note: if on Windows run rm -Force .\.git). Basically we're deleting the old .git folder and all it's contents since you'll be making a new one in a moment. Recall this is a hidden file usually, so you may not see it in your file explorer!

cd amplify-demo

git init

git add *

git commit -m "Initialize project using Create React App"

git branch -M main

git remote add origin https://github.com/<yourGithubName>/amplify-application-demo.git (replace yourGithubName with your own!)

git push -u origin main

Go here: https://github.com/settings/tokens -> click "Generate new token" -> select "Generate new token (classic)" and fill in/select these options:

Note == Amplify Application Demo Personal Access Token

Expiration == Your choice, but I selected "No expiration"

Select scopes -> repo == select ALL

Select scopes -> admin:repo_hook == select ALL

Generate new token when finished -> Make sure to copy your personal access token now. You won’t be able to see it again!

We'll be deploying this in us-west-2, but you can go to a different region for the next step! Just keep in mind the region you decide to use.

Go here: https://us-west-2.console.aws.amazon.com/secretsmanager/newsecret?region=us-west-2 -> select "Other type of secret" -> select "Plaintext" -> paste your token -> click next -> for Secret name use "github-token" -> click next -> click next -> click next -> click Store -> refresh your Secrets and you should see the new secret populate (source:https://youtu.be/tw9cQyA3B1M?t=363 )

cd ..\amplify-sam-infra\

sam build -u

sam deploy --guided -> stack name = AmplifyInfraStack -> region (whichever region you stored your secret is stored in, but we used us-west-2 in this demo!) -> Parameter GithubRepository = https://github.com/<yourGithubName>/amplify-application-demo (replace yourGithubName with your own!) -> Parameter Stage == Prod -> Confirm changes before deploy = hit "Enter" on your keyboard to accept the default -> Allow SAM CLI IAM role creation = hit "Enter" on your keyboard to accept the default -> Disable rollback = hit "Enter" on your keyboard to accept the default -> Disable rollback = hit "Enter" on your keyboard to accept the default -> MyFunction may not have authorization defined, Is this okay? = enter "Y" (DO NOT ACCEPT THE DEFAULT NOR SELECT NO ELSE IT WILL CANCEL THE DEPLOYMENT!) -> Save arguments to configuration file = hit "Enter" on your keyboard to accept the default -> SAM configuration file = hit "Enter" on your keyboard to accept the default -> SAM configuration environment = hit "Enter" on your keyboard to accept the default.


Go here: https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/home -> select your amplify app, "amplify-sam-demo-app" -> click "Run build"

_______________
TODO:

enable cors on all api methods -> Done!

return default body from api gateway -> Done!

add cognito authorizer with admin verification

add configurable payloads
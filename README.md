# x67 Day 10 - Worksheet Task 2: Build a Real CI/CD Pipeline

## What this is

A tiny working app (a static page + one API endpoint) is already built and
tested for you. Your job is **not** to write the app - it's to complete the
GitHub Actions pipeline (`.github/workflows/ci-cd.yml`) that tests it and
deploys it to Vercel automatically, and to actually run that pipeline once
against a real, free Vercel account.

This is the same pipeline shape from Task 1: **Test -> Build -> Deploy**,
now for real.

---

## Before you start (5 min)

You need two free accounts. If you already have them, skip ahead.

1. **GitHub account** - https://github.com (you likely already have one)
2. **Vercel account** - https://vercel.com/signup - sign up with your
   GitHub account, this links the two automatically

---

## Step 1 - Push the starter project to GitHub (10 min)

1. On GitHub, create a new **empty** repository (no README, no .gitignore -
   we already have our own): e.g. `x67-day10-cicd-demo`.
2. In this folder, initialize git and push:

```bash
git init
git add .
git commit -m "Day 10 CI/CD starter"
git branch -M main
git remote add origin https://github.com/<your-username>/x67-day10-cicd-demo.git
git push -u origin main
```

At this point the GitHub Actions workflow will already try to run (Stage 1:
Test) - and it will succeed, since TODO 1 is still commented out and every
other step is complete. That's expected; you'll activate the TODOs next.

---

## Step 2 - Connect the project to Vercel (5 min)

1. In the Vercel dashboard, click **Add New -> Project**.
2. Import the GitHub repository you just pushed.
3. Vercel will auto-detect the settings. Click **Deploy** once, just to
   create the project (this is your only *manual* deployment - after this,
   the pipeline takes over).
4. Once deployed, note the **Project URL** - you'll use it to check your
   pipeline's work later.

---

## Step 3 - Get your three Vercel secrets (10 min)

The pipeline needs to authenticate as you. Three values, three places to
find them:

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | Vercel dashboard -> Settings -> Tokens -> Create Token |
| `VERCEL_ORG_ID` | Project -> Settings -> General -> "Project ID" section shows both this and the next one (or run `npx vercel link` locally and read `.vercel/project.json`) |
| `VERCEL_PROJECT_ID` | Same place as above |

Now add all three as **GitHub Actions secrets**:
Repository -> Settings -> Secrets and variables -> Actions -> New repository
secret. Create all three with those exact names.

---

## Step 4 - Complete the three TODOs in the workflow (Task 2, ~40 min)

Open `.github/workflows/ci-cd.yml` and complete, in order:

- **TODO 1** - the test-running step in the `test` job
- **TODO 2** - the preview-deploy step in the `deploy-preview` job
- **TODO 3** - the production-deploy step in the `deploy-production` job

Work from the comments above each TODO - they tell you the step name and
what the step needs to do. Uncomment your finished step (remove the `#`) and
make sure the indentation lines up with the other steps in that job.

---

## Step 5 - Run the pipeline for real (10 min)

1. Commit and push your changes to a **new branch**, then open a Pull
   Request into `main`. Watch the **Actions** tab: `test` should run, then
   `deploy-preview` should run and post/print a preview URL.
2. Open the preview URL and check `/api/hello?name=<YourName>`.
3. Merge the Pull Request into `main`. Watch `deploy-production` run.
4. Open your production Vercel URL and check `/api/hello?name=<YourName>`
   again - this time it's the production deployment, shipped by the
   pipeline you built.

---

## If something fails

- **`test` fails**: run `npm install && npm test` locally first - fix the
  code issue before touching the workflow.
- **Deploy step fails with an auth error**: double-check the three secret
  *names* match exactly (case-sensitive) and that the token hasn't expired.
- **Preview works but production step never runs**: check you actually
  merged into `main` (not just closed the PR), since that job only triggers
  on a push to `main`.

Bring whichever step you got stuck on to the Coaching session (UE4) - "Rollback-Fähigkeit und Freigabeprozesse" builds directly on this exercise.

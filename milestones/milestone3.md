# Milestone 3

This document should be completed and submitted during **Unit 7** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

You will need to reference the GitHub Project Management guide in the course portal for more information about how to complete each of these steps.

- [x] In your repo, create a project board.
  - *Please be sure to share your project board with the grading team's GitHub **codepathreview**. This is separate from your repository's sharing settings.*
- [x] In your repo, create at least 5 issues from the features on your feature list.
  - List the title of each issue you created:
    1. Recipe Management (CRUD)
    2. Recipe Import from URL
    3. Cooking Plan
    4. Automatic Grocery List
    5. Recipe Details Page
- [x] In your repo, update the status of issues in your project board.
- [x] In your repo, create a GitHub Milestone for each final project unit, corresponding to each of the 5 milestones in your `milestones/` directory.
  - List the name of each milestone you created:
    1. Milestone 1 - Unit 5
    2. Milestone 2 - Unit 6
    3. Milestone 3 - Unit 7
    4. Milestone 4 - Unit 8
    5. Final Milestone - Unit 9
  - [x] Set the completion percentage of each milestone. The GitHub Milestone for this unit (Milestone 3 - Unit 7) should be 100% completed when you submit for full points.
- [ ] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of the feature's name.
  - [ ] Under each feature you have completed, include a GIF showing feature functionality.
- [x] In this documents, complete all five questions in the **Reflection** section below.

## Reflection

### 1. What went well during this unit?

Our group successfully pitched our idea in class and got useful feedback from classmates. We also set up our GitHub project management infrastructure: we created a project board and shared it with the grading team, created 5 issues mapped to our core features (Recipe Management, Recipe Import from URL, Cooking Plan, Automatic Grocery List, and Recipe Details Page), and created GitHub Milestones for all 5 units of the project so we have a clear place to track progress going forward.

### 2. What were some challenges your group faced in this unit?

One challenge was figuring out the right scope for each issue — deciding whether to break "Recipe Management" into smaller tasks (like a separate homepage issue) or keep it as one issue matching our feature list. We also had to learn how GitHub Milestone completion percentages work (they're calculated automatically from closed vs. open issues), which took some trial and error to get right for Milestone 3.

### Did you finish all of your tasks in your sprint plan for this week? If you did not finish all of the planned tasks, how would you prioritize the remaining tasks on your list?

We completed our project management setup (pitch, project board, issues, and milestones) this week, and have started development on the Recipe Management (CRUD) issue, which is now in progress. The bulk of feature development is planned for next week. Our priority order is: Recipe Management (CRUD) first since every other feature depends on having recipes in the database, then Cooking Plan, then Recipe Import from URL and Automatic Grocery List, and finally the Recipe Details Page.

### Which features and user stories would you consider “at risk”? How will you change your plan if those items remain “at risk”?

Recipe Import from URL and Automatic Grocery List feel most at risk, since they involve the trickiest logic — reliably parsing ingredient/instruction data from third-party recipe sites, and correctly merging ingredient quantities across recipes when units don't match (e.g., cups vs. grams). If these remain at risk, our fallback plan is to ship Recipe Import from URL with manual entry as the primary path and treat auto-import as an enhancement layered on top, and to start the Grocery List with simple exact-match merging before attempting unit conversion.

### 5. What additional support will you need in upcoming units as you continue to work on your final project?

We'd appreciate guidance on reliably parsing recipe data from external websites (whether to rely on schema.org markup vs. general scraping, and how to handle sites that block it), as well as best practices for keeping our Express/React development on track now that coding is starting later than originally planned.

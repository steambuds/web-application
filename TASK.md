# STEAM Buds Web App - Task Tracker

## Task Summary

**Total Tasks:** 0
- **Pending:** 0
- **Planned:** 0
- **In Progress:** 0
- **Completed:** 0
- **Blocked:** 0

## Active Tasks

_No active tasks yet_

---

## Completed Tasks

_No completed tasks yet_

---

## Task Template

Use this template when creating new tasks:

```markdown
## Task WEB-XXX: [Task Title]
**Status:** pending | planned | in_progress | completed | blocked
**Created:** YYYY-MM-DD
**Completed:** YYYY-MM-DD (if applicable)

### Description
[Detailed description of what needs to be done and why]

### Context
[Any relevant background information, related issues, or dependencies]

### Requirements
- Requirement 1
- Requirement 2
- Requirement 3

### Steps
1. [ ] Step 1 description
2. [ ] Step 2 description
   - [ ] Sub-step 2.1
   - [ ] Sub-step 2.2
3. [ ] Step 3 description

### Contextual Changes

**Files Created:**
- `path/to/file1.ext` - Description
- `path/to/file2.ext` - Description

**Files Modified:**
- `path/to/file3.ext` - What changed
- `path/to/file4.ext` - What changed

**Dependencies Added/Removed:**
- Added: `package-name@version` - Purpose
- Removed: `old-package` - Reason

**Configuration Changes:**
- Updated `config-file` - Description of changes

**Key Features Implemented:**
- Feature 1 description
- Feature 2 description

### Notes
[Any blockers, discoveries, or important information discovered during implementation]
```

---

## Task Guidelines

### Task ID Format
- `WEB-001`, `WEB-002`, etc.
- Sequential numbering
- Prefix "WEB" indicates web application tasks

### Task Lifecycle

#### 1. Creating Tasks
When a new task is created:
1. Assign next available task ID (WEB-XXX)
2. Set status to `pending`
3. Add creation date
4. Write clear description and context
5. Add to "Active Tasks" summary at top
6. Steps section initially empty (filled during planning)

#### 2. Planning Tasks
When planning a task:
1. Read `TASK.md` to find the task
2. Break down into concrete, actionable steps
3. Add sub-steps where needed
4. Define requirements clearly
5. Update status to `planned`
6. Update task summary at top

#### 3. Executing Tasks
When working on a task:
1. Update status to `in_progress`
2. Update task summary at top
3. Complete steps sequentially
4. Check off steps as completed using [x]
5. Document discoveries in Notes section
6. Update Contextual Changes as you progress

#### 4. Completing Tasks
When finishing a task:
1. Ensure all steps are checked [x]
2. Update status to `completed`
3. Add completion date
4. Complete all Contextual Changes documentation
5. **Update AGENT.md** with new context in compact format
6. Move task from "Active Tasks" to "Completed Tasks" in summary
7. Update task counts in summary

#### 5. Blocking Tasks
If a task cannot proceed:
1. Update status to `blocked`
2. Document reason clearly in Notes section
3. Update task summary at top
4. Create new task for unblocking if needed

### Status Definitions
- `pending` - Task created, not yet planned
- `planned` - Steps defined, ready to execute
- `in_progress` - Currently being worked on
- `completed` - Finished with context updated in AGENT.md
- `blocked` - Cannot proceed (reason documented in Notes)

### Best Practices
- Keep task descriptions clear and focused
- Break large tasks into smaller sub-tasks when needed
- Update Contextual Changes in real-time, not after completion
- Always update AGENT.md when completing tasks
- Document blockers immediately when encountered
- Reference related tasks using task IDs
- Include context for future developers/agents

### Integration with AGENT.md
- When completing a task, update relevant sections in AGENT.md
- Add new dependencies to AGENT.md's Tech Stack section
- Document new files in AGENT.md's Project Structure
- Update architecture patterns if they change
- Keep AGENT.md compact - focus on what future agents need to know

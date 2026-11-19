#!/usr/bin/env bash
# Commits and pushes a run's progress every 15 minutes until the run finishes,
# so the GitHub Pages site follows along. Run it in tmux:
#   tmux new -d -s publish 'scripts/publish-run.sh world-04'
set -u
run="$1"
cd "$(dirname "$0")/.."
while true; do
  done_=0
  grep -qE '"status": "(complete|failed|stopped)"' "runs/$run/run.json" 2>/dev/null && done_=1
  if [ -n "$(git status --porcelain "runs/$run")" ]; then
    t=$(grep -o '"turnsCompleted": [0-9]*' "runs/$run/run.json" | grep -o '[0-9]*$')
    git add "runs/$run" && git commit -q -m "$run: progress through turn $t

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" && { git push -q || { sleep 20; git push -q; }; } && echo "pushed $run turn $t $(date +%H:%M)"
  fi
  [ "$done_" = 1 ] && break
  sleep 900
done
echo "$run finished"

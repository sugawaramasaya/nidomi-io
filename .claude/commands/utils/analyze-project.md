---
description: "プロジェクト全体の品質分析と最適化提案"
allowed-tools: ["Bash", "FileSystem"]
---

# プロジェクト品質分析

nidomi.ioプロジェクト全体の品質を分析し、最適化提案を生成します。

## Code Quality Analysis
```bash
# コード品質メトリクス
echo "📊 Code Quality Analysis..."

# TypeScript設定確認
npx tsc --showConfig

# ESLint結果分析
npx eslint . --ext .ts,.tsx --format json > eslint-report.json

# コード複雑度分析
npx complexity-report --format json src/ > complexity-report.json

# 重複コード検出
npx jscpd src/ --format json > duplication-report.json
```

## Bundle Analysis
```bash
# バンドルサイズ分析
echo "📦 Bundle Analysis..."

# プロダクションビルド
npm run build

# Bundle analyzer実行
npx @next/bundle-analyzer

# 各ページのバンドルサイズ確認
du -sh .next/static/chunks/pages/*.js | sort -h

# 未使用依存関係確認
npx depcheck
```

## Performance Analysis
```bash
# パフォーマンス分析
echo "⚡ Performance Analysis..."

# 全主要ページのLighthouse実行
PAGES=("/" "/login" "/mypage" "/home" "/settings")
for page in "${PAGES[@]}"; do
  npx lighthouse "http://localhost:3000$page" \
    --chrome-flags="--headless" \
    --output=json \
    --output-path="lighthouse-$page.json"
done

# Core Web Vitals集計
node -e "
const fs = require('fs');
const pages = ['/', '/login', '/mypage', '/home', '/settings'];
console.log('Page\t\tPerf\tFCP\tLCP\tCLS');
pages.forEach(page => {
  const filename = \`lighthouse-\${page === '/' ? 'index' : page.slice(1)}.json\`;
  if (fs.existsSync(filename)) {
    const report = JSON.parse(fs.readFileSync(filename));
    const perf = Math.round(report.lhr.categories.performance.score * 100);
    const fcp = report.lhr.audits['first-contentful-paint'].displayValue;
    const lcp = report.lhr.audits['largest-contentful-paint'].displayValue;
    const cls = report.lhr.audits['cumulative-layout-shift'].displayValue;
    console.log(\`\${page}\t\t\${perf}\t\${fcp}\t\${lcp}\t\${cls}\`);
  }
});
"
```

## Security Analysis
```bash
# セキュリティ分析
echo "🔒 Security Analysis..."

# 依存関係脆弱性詳細
npm audit --json > security-audit.json

# Semgrep セキュリティスキャン（インストール済みの場合）
if command -v semgrep &> /dev/null; then
  semgrep --config=auto src/ --json > semgrep-report.json
fi

# 機密情報スキャン
grep -r "api_key\|password\|secret" src/ --include="*.ts" --include="*.tsx" || echo "No secrets found in source"
```

## Accessibility Analysis
```bash
# アクセシビリティ分析
echo "♿ Accessibility Analysis..."

# axe-core による全ページスキャン
for page in "${PAGES[@]}"; do
  npx @axe-core/cli "http://localhost:3000$page" \
    --save "axe-report-$page.json"
done

# 集計レポート生成
node -e "
const fs = require('fs');
const pages = ['/', '/login', '/mypage', '/home', '/settings'];
let totalViolations = 0;
let criticalViolations = 0;

console.log('Accessibility Analysis Summary:');
pages.forEach(page => {
  const filename = \`axe-report-\${page === '/' ? 'index' : page.slice(1)}.json\`;
  if (fs.existsSync(filename)) {
    const report = JSON.parse(fs.readFileSync(filename));
    const violations = report.violations.length;
    const critical = report.violations.filter(v => v.impact === 'critical').length;
    totalViolations += violations;
    criticalViolations += critical;
    console.log(\`\${page}: \${violations} violations (\${critical} critical)\`);
  }
});

console.log(\`Total: \${totalViolations} violations (\${criticalViolations} critical)\`);
"
```

## Code Coverage Analysis
```bash
# テストカバレッジ分析
echo "🧪 Test Coverage Analysis..."

# 全テスト実行（カバレッジ付き）
npm run test:coverage

# カバレッジレポート分析
node -e "
const coverage = require('./coverage/coverage-summary.json');
const total = coverage.total;
console.log('Coverage Summary:');
console.log('Lines:', total.lines.pct + '%');
console.log('Statements:', total.statements.pct + '%');
console.log('Functions:', total.functions.pct + '%');
console.log('Branches:', total.branches.pct + '%');

// 低カバレッジファイル特定
Object.entries(coverage).forEach(([file, data]) => {
  if (file !== 'total' && data.lines.pct < 80) {
    console.log('Low coverage:', file, data.lines.pct + '%');
  }
});
"
```

## Documentation Analysis
```bash
# ドキュメント分析
echo "📚 Documentation Analysis..."

# README.md 品質チェック
if [[ -f "README.md" ]]; then
  LINES=$(wc -l < README.md)
  echo "README.md: $LINES lines"
  
  # 必要セクションの確認
  SECTIONS=("Installation" "Usage" "Development" "Testing" "Deployment")
  for section in "${SECTIONS[@]}"; do
    if grep -q "$section" README.md; then
      echo "✅ $section section found"
    else
      echo "❌ $section section missing"
    fi
  done
fi

# コードコメント率
TOTAL_LINES=$(find src -name "*.ts" -o -name "*.tsx" | xargs wc -l | tail -1 | awk '{print $1}')
COMMENT_LINES=$(find src -name "*.ts" -o -name "*.tsx" | xargs grep -c "^\s*//" | awk '{sum+=$1} END {print sum}')
COMMENT_RATIO=$(echo "scale=2; $COMMENT_LINES * 100 / $TOTAL_LINES" | bc)
echo "Comment ratio: $COMMENT_RATIO%"
```

## 総合レポート生成
```bash
# 総合品質レポート作成
echo "📋 Generating Comprehensive Report..."

cat > project-analysis-report.md << EOF
# Project Quality Analysis Report - $(date)

## Overview
- **Project**: nidomi.io
- **Analysis Date**: $(date)
- **Git Commit**: $(git rev-parse HEAD)

## Code Quality Metrics
### TypeScript Configuration
- Strict mode: $(grep -q '"strict": true' tsconfig.json && echo "✅ Enabled" || echo "❌ Disabled")
- No implicit any: $(grep -q '"noImplicitAny": true' tsconfig.json && echo "✅ Enabled" || echo "❌ Disabled")

### ESLint Results
$(node -e "
const report = require('./eslint-report.json');
const errorCount = report.reduce((sum, file) => sum + file.errorCount, 0);
const warningCount = report.reduce((sum, file) => sum + file.warningCount, 0);
console.log('- Errors:', errorCount);
console.log('- Warnings:', warningCount);
")

### Code Complexity
$(node -e "
const report = require('./complexity-report.json');
console.log('- Average Complexity:', report.summary.average.complexity);
console.log('- High Complexity Functions:', report.functions.filter(f => f.complexity > 10).length);
")

## Performance Metrics
### Lighthouse Scores (Average)
$(node -e "
const fs = require('fs');
const pages = ['/', '/login', '/mypage', '/home', '/settings'];
let totalPerf = 0, count = 0;
pages.forEach(page => {
  const filename = \`lighthouse-\${page === '/' ? 'index' : page.slice(1)}.json\`;
  if (fs.existsSync(filename)) {
    const report = JSON.parse(fs.readFileSync(filename));
    totalPerf += report.lhr.categories.performance.score * 100;
    count++;
  }
});
console.log('- Performance Score:', Math.round(totalPerf / count) + '/100');
")

### Bundle Size
$(ls -lh .next/static/chunks/pages/_app*.js | awk '{print "- Main Bundle:", $5}')

## Security Assessment
### Dependency Vulnerabilities
$(node -e "
const audit = require('./security-audit.json');
console.log('- Critical:', audit.metadata.vulnerabilities.critical || 0);
console.log('- High:', audit.metadata.vulnerabilities.high || 0);
console.log('- Moderate:', audit.metadata.vulnerabilities.moderate || 0);
")

## Test Coverage
$(node -e "
const coverage = require('./coverage/coverage-summary.json').total;
console.log('- Lines:', coverage.lines.pct + '%');
console.log('- Functions:', coverage.functions.pct + '%');
console.log('- Branches:', coverage.branches.pct + '%');
")

## Recommendations

### High Priority
1. **Performance Optimization**
   - Implement code splitting for large components
   - Optimize image loading with Next.js Image component
   - Review and reduce bundle size

2. **Security Improvements**
   - Update vulnerable dependencies
   - Implement Content Security Policy
   - Add rate limiting to API routes

### Medium Priority
1. **Code Quality**
   - Reduce code complexity in high-complexity functions
   - Increase test coverage to 90%+
   - Add JSDoc comments to public APIs

2. **Accessibility**
   - Fix critical accessibility violations
   - Implement keyboard navigation testing
   - Add ARIA labels to interactive elements

### Low Priority
1. **Documentation**
   - Expand README.md with deployment instructions
   - Add API documentation
   - Create component usage examples

## Next Review Date
Recommended: $(date -d '+2 weeks' '+%Y-%m-%d')
EOF

echo "✅ Comprehensive analysis complete!"
echo "📄 Report saved: project-analysis-report.md"
```

import Home from "home";
import Graph from "./pages/Graph";
import Stack from "./pages/Stack";
import Linkedlist from "./pages/Linkedlist";
import Searching from "./pages/Searching";
import Hashing from "./pages/Hashing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import sub-components for Graph
import GraphAim from "./pages/graph/Aim";
import GraphOverview from "./pages/graph/Overview";
import GraphBasic from "./pages/graph/Basic";
import GraphImplementation from "./pages/graph/Implementation";
import GraphTraversal from "./pages/graph/Traversal";
import GraphGraphicalRepresentation from "./pages/graph/GraphicalRepresentation";
import GraphQuiz from "./pages/graph/Quiz";

// Import sub-components for Stack
import StackAim from "./pages/stack/Aim";
import StackOverview from "./pages/stack/Overview";
import StackBasic from "./pages/stack/Basic";
import StackGraphicalRepresentation from "./pages/stack/GraphicalRepresentation";
import StackQuiz from "./pages/stack/Quiz";

// Import sub-components for Linkedlist
import LinkedlistAim from "./pages/linkedlist/Aim";
import LinkedlistOverview from "./pages/linkedlist/Overview";
import LinkedlistBasic from "./pages/linkedlist/Basic";
import LinkedlistGraphicalRepresentation from "./pages/linkedlist/GraphicalRepresentation";
import LinkedlistQuiz from "./pages/linkedlist/Quiz";

// Import sub-components for Searching
import SearchingAim from "./pages/searching/Aim";
import SearchingOverviewBinary from "./pages/searching/OverviewBinary";
import SearchingBasicBinary from "./pages/searching/BasicBinary";
import SearchingQuizBinary from "./pages/searching/QuizBinary";
import SearchingGraphicalRepresentationBinary from "./pages/searching/GraphicalRepresentationBinary";
import SearchingOverviewLinear from "./pages/searching/OverviewLinear";
import SearchingBasicLinear from "./pages/searching/BasicLinear";
import SearchingGraphicalRepresentationLinear from "./pages/searching/GraphicalRepresentationLinear";
import SearchingQuizLinear from "./pages/searching/QuizLinear";

// Import sub-components for Hashing
import HashingAim from "./pages/hashing/Aim";
import HashingOverview from "./pages/hashing/Overview";
import HashingBasic from "./pages/hashing/Basic";
import HashingGraphicalRepresentation from "./pages/hashing/GraphicalRepresentation";
import HashingQuiz from "./pages/hashing/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* Graph Routes */}
        <Route
          path="/graph"
          element={<Graph />}
        >
          <Route
            path="/graph/overview"
            element={<GraphOverview />}
          />
          <Route
            path="/graph/quiz/:id"
            element={<GraphQuiz />}
          />
          <Route
            path="/graph/aim"
            element={<GraphAim />}
          />
          <Route
            path="/graph/basic"
            element={<GraphBasic />}
          />
          <Route
            path="/graph/implementation"
            element={<GraphImplementation />}
          />
          <Route
            path="/graph/traversal"
            element={<GraphTraversal />}
          />
          <Route
            path="/graph/graphical-representation"
            element={<GraphGraphicalRepresentation />}
          />
        </Route>
        {/* Stack Routes */}
        <Route
          path="/stack"
          element={<Stack />}
        >
          <Route
            path="/stack/aim"
            element={<StackAim />}
          />
          <Route
            path="/stack/overview"
            element={<StackOverview />}
          />
          <Route
            path="/stack/basic"
            element={<StackBasic />}
          />
          <Route
            path="/stack/graphical-representation"
            element={<StackGraphicalRepresentation />}
          />
          <Route
            path="/stack/quiz/:id"
            element={<StackQuiz />}
          />
        </Route>
        <Route
          path="/linkedlist"
          element={<Linkedlist />}
        >
          <Route
            path="/linkedlist/aim"
            element={<LinkedlistAim />}
          />
          <Route
            path="/linkedlist/overview"
            element={<LinkedlistOverview />}
          />
          <Route
            path="/linkedlist/basic"
            element={<LinkedlistBasic />}
          />
          <Route
            path="/linkedlist/graphical-representation"
            element={<LinkedlistGraphicalRepresentation />}
          />
          <Route
            path="/linkedlist/quiz/:id"
            element={<LinkedlistQuiz />}
          />
        </Route>
        {/* Searching Routes */}
        <Route
          path="/searching"
          element={<Searching />}
        >
          <Route
            path="/searching/aim"
            element={<SearchingAim />}
          />
          <Route
            path="/searching/overviewbinary"
            element={<SearchingOverviewBinary />}
          />
          <Route
            path="/searching/quizbinary/:id"
            element={<SearchingQuizBinary />}
          />
          <Route
            path="/searching/basicbinary"
            element={<SearchingBasicBinary />}
          />
          <Route
            path="/searching/graphicalrepresentationbinary"
            element={<SearchingGraphicalRepresentationBinary />}
          />
          <Route
            path="/searching/overviewlinear"
            element={<SearchingOverviewLinear />}
          />
          <Route
            path="/searching/quizlinear/:id"
            element={<SearchingQuizLinear />}
          />
          <Route
            path="/searching/basiclinear"
            element={<SearchingBasicLinear />}
          />
          <Route
            path="/searching/graphicalrepresentationlinear"
            element={<SearchingGraphicalRepresentationLinear />}
          />
        </Route>
        {/* Hashing Routes */}
        <Route
          path="/hashing"
          element={<Hashing />}
        >
          <Route
            path="/hashing/aim"
            element={<HashingAim />}
          />
          <Route
            path="/hashing/overview"
            element={<HashingOverview />}
          />
          <Route
            path="/hashing/basic"
            element={<HashingBasic />}
          />
          <Route
            path="/hashing/graphical-representation"
            element={<HashingGraphicalRepresentation />}
          />
          <Route
            path="/hashing/quiz/:id"
            element={<HashingQuiz />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { handilBurger } from "../slice/handBurgerSlice";
import { SEARCH_API_URL } from "../utils/constant";
import { addCache } from "../slice/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const searchMovie = useSelector((store) => store.search);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultShow, setSearchResultShow] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchResultShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchWords = async () => {
    if (search.trim().length > 0) {
      if (searchMovie[search]) {
        setSearchResult(searchMovie[search]);
        setSearchResultShow(true);
      } else {
        const data = await fetch(SEARCH_API_URL + search);
        const json = await data.json();
        setSearchResult(json[1]);
        dispatch(addCache({ [search]: json[1] }));
        setSearchResultShow(true);
      }
    } else {
      setSearchResult([]);
      setSearchResultShow(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => searchWords(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handilBurgChange = () => {
    dispatch(handilBurger());
  };

  const handilFocus = () => {
    setSearchResultShow(true);
  };

  const handileBlur = () => {
    setTimeout(() => {
      if (!document.activeElement.closest(".search-suggestion")) {
        setSearchResultShow(false);
      }
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl">
      <div className="grid grid-cols-12 items-center py-3 px-5">
        <div className="col-span-1 flex items-center space-x-2">
          <img
            onClick={handilBurgChange}
            className="cursor-pointer h-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAXVBMVEXz9fT09PQzMzM3NzcwMDD4+vnExMTn5+f////x8fH4+PgiIiIsLCxubm7S0tKysbE+Pj6NjY0nJyfb3dyXl5fKy8u7vbypqqp9f35ZW1pDRERISkkaGxqipKNhYmLD9sQ/AAACjklEQVR4nO3a226jQAwG4DkwgTkUJlBIm6Z9/8esh5BKlVZ7gfFI2f2/JuoV5g8kgDFKAQAAAAAAAAAAAAAAAADAf8AFzRFc8J7+V0q7rms/367LV0mqHK2HlVaXsPSJa8QtgWldDCWu8jU2Lm1adtoS2HkvHzY41fE5etNPTT7udDrKJJjSB+fpwHO2cRzLi6NUiNGet5pSkd0pR5Oz5cvZjPnkpIKSToUh2mxTY7iaZLKNQ6CaMgIdDNR8jWNjTcNFecd4nWlvKZHfmg/Kd9q/fqSxScy8hnbPmD5eve68EvneakW/CPqb+mnq555n7qe+n9Z6TkmcJEpduj5Qgfacc4FNB7qy8VtdAAAAAPgbdyTRpJouyf1pWC4D32UZTlRN5OL2wbVvTWl3eS3vpnlrBbduKb2YZKnNYXeRxlibzLJVFUrrh5hNQ3n5Wak5i4OXS1vM+UYrohad2fMmapxveRZMurq855yvmatUeL+IJqUePXSq9VPLN/nWd3RMEL5z9yyH219498Y3TxW2WlrFvPVRN+xzbVtmzG0LP0naDdIiLdIibaWwj2GGOyht0P5X3UOFdaIRnCsvzR86hFJIO+VkRpGO0mrXf56P8tmvMx2RCZQvsxw9vaRbTCNfGm/ppQ1OaaE5bxkVLXG01KSUNpDBGKphx3FxUpNTt1YeUs5rC8icRZrUZJsG7Tsv0/WGcl9l+rrF0rEmLpPi7WuSGZvelSnncn45ynnRUkeEh3BIx3vveuWfVFknvfsPt/dmd62gKjwGtHbW+59Z+vnQqmaLvjPtz+K1cqr1rLbzu/Co4Gve+th/VbMtXTNqOQWz0oreBv0DZtrKkBZpkRYAAAAAAAAAAAAAAP4F3yAXX3L6fIDzAAAAAElFTkSuQmCC"
            alt="youtube-logo"
          />
          <img className="cursor-pointer h-13" src="data:image/png;base64,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" alt="camera-logo" />
        </div>
        <div className="col-span-10 flex justify-center relative">
          <div className="w-1/2 flex items-center relative" ref={searchInputRef}>
            <input
              className="py-2 px-4 w-full border border-gray-300 rounded-l-full focus:outline-none"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handilFocus}
              onBlur={handileBlur}
            />
            <button className="py-2 px-4 bg-gray-100 border border-gray-300 rounded-r-full">
              <SearchIcon />
            </button>
            {searchResultShow && searchResult.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-2xl mt-1 z-10 search-suggestion">
                <ul>
                  {searchResult.map((s, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center"
                    >
                      <SearchIcon className="mr-2" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="cursor-pointer">
            <PersonIcon className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

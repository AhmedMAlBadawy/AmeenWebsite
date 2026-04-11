import React from "react";
import { useState } from "react";
import styles from "./BlogsFilter.module.css";
import { data as dataEn } from "./../../../data/pages/blogs/data";
import { data as dataAr } from "./../../../dataAr/pages/blogs/data";
import Grid from "../../shared/Grid/Grid";
import InputField from "../../../atoms/InputField/InputField";
import Container from "../../shared/Container/Container";
import MultiSelectBox from "../../../atoms/MultiSelectBox/MultiSelectBox";
import { useEffect } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const BlogsFilter = ({
  setCheckedTags,
  Tags,
  setTags,
  Search,
  setSearch,
  getData,
  PageSize,
  PageIndex,
  setPageIndex,
  CheckedTags,
}) => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    setPageIndex(0);
  };

  useEffect(() => {
    let newTags = Tags.filter((tag) => {
      return tag.check;
    });
    setCheckedTags(
      newTags.map((t) => {
        return t.id;
      })
    );
    setPageIndex(0);
  }, [Tags]);

  useEffect(() => {
    getData(0, PageSize, true);
  }, [CheckedTags]);

  useEffect(() => {
    getData(0, PageSize, true);
  }, [Search]);

  return (
    <div className={styles.filtersInputs}>
      <div className={styles.filtersInputs}>
        <div className={styles.SearchInput}>
          <InputField
            placeholder={data.form.SearchField.placeholder}
            onChange={handleSearchInput}
            value={Search}
          />
        </div>
        <div className={styles.inputContainer}>
          <MultiSelectBox
            data={Tags}
            setData={setTags}
            placeholder={data.form.TagsField.placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsFilter;

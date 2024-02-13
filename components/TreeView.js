"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view";
import "./treeview.css";
import DocumentIcon from "../public/Images/person-icon-476x512-hr6biidg.png";
import { UnfoldLess, UnfoldMore } from "@mui/icons-material";

const TreeViewComponenet = () => {
  const [expanded, setExpanded] = React.useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };

  return (
    <div className="h-full flex flex-col justify-center items-center w-[100%]">
      <Box sx={{ Height: 270, flexGrow: 1, Width: 800 }}>
        <Box sx={{ mb: 1, ml: 2 }}>
          <Button
            onClick={handleExpandClick}
            className="bg-slate-300 text-white"
          >
            {expanded.length === 0 ? (
              <>
                <UnfoldMore />
                Expand all
              </>
            ) : (
              <>
                <UnfoldLess />
                Collapse all
              </>
            )}
          </Button>
        </Box>
        <TreeView
          aria-label="controlled"
          expanded={expanded}
          onNodeToggle={handleToggle}
          className="flex flex-row justify-center items-center w-full tree-view"
        >
          <TreeItem
            nodeId="1"
            label={
              <>
                <img src={DocumentIcon.src} alt="Folder" /> Javascript
              </>
            }
            className="w-full father"
          >
            <div className="flex flex-row w-full justify-center items-center">
              <TreeItem
                nodeId="2"
                label={
                  <>
                    <img src={DocumentIcon.src} alt="Folder" /> React
                  </>
                }
              >
                <div className="flex flex-row">
                  <TreeItem
                    nodeId="3"
                    label={
                      <>
                        <img src={DocumentIcon.src} alt="Folder" /> Next
                      </>
                    }
                    className="w-full"
                  >
                    <div className="flex flex-row w-full">
                      <TreeItem
                        nodeId="4"
                        label={
                          <>
                            <img src={DocumentIcon.src} alt="Document" /> V13
                          </>
                        }
                      />
                      <TreeItem
                        nodeId="5"
                        label={
                          <>
                            <img src={DocumentIcon.src} alt="Document" />
                            V14
                          </>
                        }
                      />
                    </div>
                  </TreeItem>
                </div>
              </TreeItem>
              <TreeItem
                nodeId="6"
                label={
                  <>
                    <img src={DocumentIcon.src} alt="Folder" /> React
                  </>
                }
              >
                <div className="flex flex-row">
                  <TreeItem
                    nodeId="7"
                    label={
                      <>
                        <img src={DocumentIcon.src} alt="Folder" /> Next
                      </>
                    }
                    className="w-full"
                  >
                    <div className="flex flex-row w-full">
                      <TreeItem
                        nodeId="8"
                        label={
                          <>
                            <img src={DocumentIcon.src} alt="Document" /> V13
                          </>
                        }
                      />
                      <TreeItem
                        nodeId="9"
                        label={
                          <>
                            <img src={DocumentIcon.src} alt="Document" /> V14
                          </>
                        }
                      />
                    </div>
                  </TreeItem>
                </div>
              </TreeItem>
            </div>
          </TreeItem>
        </TreeView>
      </Box>
    </div>
  );
};

export default TreeViewComponenet;

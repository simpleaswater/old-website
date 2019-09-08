import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

import Subscribe from '../../../../components/LayoutComponents/Subscribe'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    },
    comingsoon: {
        color: "#D5DBDB",
        marginTop: '40px'
    }
})

export default function ComingSoon() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>Merkle-DAGs</b></Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <Typography variant="h5" className={classes.comingsoon}><b>Coming Soon...</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Subscribe placeholderText="Get access to this when it's here" buttonText="" />
            </Grid>
        </Grid>
    )
}


/* import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    }
})

export default function MerkleDag() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Merkle-DAGs</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A Direct Acyclic Graph (DAG)is a type of graph in which edges have direction and cycles are not allowed. For example, a linked list like A→B→C is an instance of a DAG where A references B and so on. We say that B is a child or a descendant of A, and that node A has a link to B. Conversely A is a parent of B. We call nodes that are not children to any other node in the DAG root nodes.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A Merkle-DAG is a DAG where each node has an identifier and this is the result of hashing the node’s contents — any opaque payload carried by the node and the list of identifiers of its children — using a cryptographic hash function like SHA256. This brings some important considerations:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ol>
                    <li>
                        <Typography variant="body1">
                            Merkle-DAGs can only be constructed from the leaves, that is, from nodes without children. Parents are added after children because the children’s identifiers must be computed in advance to be able to link them.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Every node in a Merkle-DAG is the root of a (sub)Merkle-DAG itself, and this subgraph is contained in the parent DAG[9].
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Merkle-DAG nodes are immutable. Any change in a node would alter its identifier and thus affect all the ascendants in the DAG, essentially creating a different DAG. Take a look at <a target="_blank" href="https://media.consensys.net/ever-wonder-how-merkle-trees-work-c2f8b7100ed3"> this helpful illustration using bananas</a> from our friends at Consensys.
                        </Typography>
                    </li>
                </ol>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Identifying a data object (like a Merkle-DAG node) by the value of its hash is referred to as content addressing. Thus, we name the node identifier as Content Identifier or CID.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    For example, the previous linked list, assuming that the payload of eachnode is just the CID of its descendant would be: A=Hash(B)→B=Hash©→C=Hash(∅). The properties of the hash function ensure thatno cycles can exist when creating Merkle-DAGs[10].
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Merkle-DAGs are self-verified structures. The CID of a node is univocally linked to the contents of its payload and those of all its descendants. Thus two nodes with the same CID univocally represent exactly the same DAG. This will be a key property to efficiently sync Merkle-CRDTs without having to copy the full DAG, as exploited by systems like IPFS. Merkle-DAGs are very widely used. Source control systems like Git [11] and others [6] use them to efficiently store the repository history, in away that enables de-duplicating the objects and detecting conflicts between branches.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Excerpted from Markle-CRDT draft paper by <i>@hsanjuan</i>, <i>@haadcode</i>, and <i>@pgte</i>. Available: <br /><a target="_blank" href="https://hector.link/presentations/merkle-crdts/merkle-crdts.pdf">  https://hector.link/presentations/merkle-crdts/merkle-crdts.pdf</a>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        Footnotes
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    [6] Merkle-DAGs are similar to Merkle Trees [20] but there are no balance requirements and every node can carry a payload. In DAGs, several branches can re-converge or, in other words, a node can have several parents.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    [10] Hash functions are one way functions. Creating a cycle should then be impossibly difficult, unless some weakness is discovered and exploited.
                </Typography>
            </Grid>
        </Grid>
    )
} */